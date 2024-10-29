  import { Suspense } from 'react'


export default async function VideoComponent(src: string, className: string) {
//   const src = "https://www.youtube.com/watch?v=gfU1iZnjRZM"; //await getVideoSrc()
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <iframe src={src} allowFullScreen className={className}/>
      </Suspense>
    </section>
  );
}