import { useEffect, useState } from "react";
import { useImagesReady } from "@/lib/store";
import { getCachedImages, isCloudDone } from "@/lib/image-store";

/**
 * Renders a recipe photo without ever flashing the bundled stock fallback.
 * When given the recipe `id`, it shows the real uploaded photo as soon as it's
 * known, otherwise holds a skeleton until the global cloud fetch confirms the
 * id genuinely has no upload — only then does it fall back to the bundled `src`.
 */
export function RecipePhoto({
  id,
  src,
  alt,
  className,
  loading,
  draggable,
}: {
  id?: string;
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  draggable?: boolean;
}) {
  const ready = useImagesReady();
  const [cached, setCached] = useState<string | undefined>(() =>
    id ? getCachedImages()[id] : undefined,
  );
  const [cloudDone, setCloudDone] = useState<boolean>(() => isCloudDone());
  useEffect(() => {
    const fn = () => {
      setCached(id ? getCachedImages()[id] : undefined);
      setCloudDone(isCloudDone());
    };
    fn();
    window.addEventListener("mab:images", fn);
    window.addEventListener("mab:images-ready", fn);
    return () => {
      window.removeEventListener("mab:images", fn);
      window.removeEventListener("mab:images-ready", fn);
    };
  }, [id]);

  const skeleton = (
    <div className={`${className ?? ""} bg-highlight/60 animate-pulse`} aria-label={alt} role="img" />
  );

  // Real uploaded photo is known — show it immediately.
  if (cached) {
    return (
      <img src={cached} alt={alt} className={className} loading={loading} draggable={draggable} />
    );
  }
  // Still loading: don't flash stock. Skeleton until cache + cloud are settled.
  if (!ready || !cloudDone) return skeleton;
  // Cloud confirmed there's no uploaded photo for this id → bundled fallback.
  return <img src={src} alt={alt} className={className} loading={loading} draggable={draggable} />;
}
