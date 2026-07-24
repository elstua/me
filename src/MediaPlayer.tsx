import type { CSSProperties } from "react";

interface MediaPlayerProps {
  url: string;
  playing?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  playsinline?: boolean;
  alt?: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  styleName?: string;
}

export default function MediaPlayer({
  url,
  playing = false,
  muted = false,
  controls = false,
  loop = false,
  playsinline = true,
  alt,
  width = "100%",
  height = "auto",
  style,
  styleName,
}: MediaPlayerProps) {
  return (
    <video
      src={url}
      autoPlay={playing}
      muted={muted}
      controls={controls}
      loop={loop}
      playsInline={playsinline}
      preload="metadata"
      aria-label={alt}
      className={styleName}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      style={{
        display: "block",
        width,
        height,
        maxWidth: "100%",
        ...style,
      }}
    />
  );
}
