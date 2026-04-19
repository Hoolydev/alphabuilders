'use client';

import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

export default function InteractiveRobot() {
  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Cover Spline watermark */}
      <div className="absolute bottom-0 left-0 w-36 h-10 z-10 bg-black-metal" />
      <Suspense
        fallback={
          <div className="w-full h-full min-h-[500px] flex items-center justify-center">
            <div className="flex items-center gap-3">
              <svg
                className="animate-spin h-5 w-5 text-[#e3fd79]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
                />
              </svg>
              <span className="text-sm text-[#c4a896]">Carregando...</span>
            </div>
          </div>
        }
      >
        <Spline scene={SCENE_URL} className="w-full h-full" />
      </Suspense>
    </div>
  );
}
