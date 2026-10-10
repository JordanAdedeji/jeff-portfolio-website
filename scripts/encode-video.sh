#!/usr/bin/env bash
# Re-encode a video for the web: H.264, shorter side capped at 720px by default
# (never upscaled), max 30fps, with the index moved to the front so playback can start
# before the whole file has downloaded.
#
#   ./scripts/encode-video.sh input.mp4 output.mp4 [--no-audio] [--crf=28] [--short-side=720]
#
# Needs ffmpeg (brew install ffmpeg). Higher crf = smaller file, lower quality.
set -euo pipefail

in="$1"; out="$2"; shift 2
crf=28
short=720
audio=(-c:a aac -b:a 96k -ac 2)
for arg in "$@"; do
  case "$arg" in
    --no-audio) audio=(-an) ;;
    --crf=*) crf="${arg#--crf=}" ;;
    --short-side=*) short="${arg#--short-side=}" ;;
  esac
done

rate=$(ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "$in")
fps=$(awk -F/ '{printf "%.2f", $1/$2}' <<<"$rate")

filter="scale=w='if(gt(iw,ih),-2,min($short,iw))':h='if(gt(iw,ih),min($short,ih),-2)'"
if awk "BEGIN{exit !($fps > 30.5)}"; then filter="$filter,fps=30"; fi

ffmpeg -y -v error -i "$in" -vf "$filter" \
  -c:v libx264 -preset slow -crf "$crf" -profile:v high -pix_fmt yuv420p \
  "${audio[@]}" -movflags +faststart "$out"
