<template>
  <div
    class="tech-icon-wrapper inline-flex items-center justify-center"
    :class="customClass"
  >
    <!-- SVG rendered based on name -->
    <svg
      v-if="name === 'photoshop'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <path
        d="M12 33V16H19.5C21.8 16 23.5 16.6 24.6 17.7C25.7 18.8 26.2 20.3 26.2 22.2C26.2 24.1 25.6 25.6 24.5 26.7C23.4 27.8 21.6 28.3 19.3 28.3H16.2V33H12ZM16.2 24.8H19.1C20.3 24.8 21.1 24.5 21.6 23.9C22.1 23.3 22.4 22.5 22.4 21.5C22.4 20.5 22.1 19.8 21.6 19.3C21.1 18.8 20.2 18.5 19 18.5H16.2V24.8Z"
        fill="#31A8FF"
      />
      <path
        d="M27.2 30.2C28.2 30.9 29.5 31.3 31.1 31.3C32.7 31.3 33.7 30.9 34.3 30.2C34.8 29.5 35.1 28.8 35.1 27.9C35.1 27.1 34.8 26.4 34.1 25.9C33.5 25.3 32.2 24.8 30.4 24.2C28.4 23.6 27.1 22.8 26.4 22C25.6 21.1 25.2 20 25.2 18.6C25.2 17.2 25.8 16 26.9 15.1C28.1 14.1 29.7 13.7 31.7 13.7C33.2 13.7 34.5 14 35.7 14.6L34.5 17.5C33.6 17 32.6 16.8 31.5 16.8C30.2 16.8 29.3 17.1 28.8 17.6C28.3 18.1 28 18.8 28 19.5C28 20.2 28.3 20.8 28.9 21.3C29.6 21.8 30.7 22.3 32.4 22.9C34.4 23.5 35.8 24.3 36.7 25.2C37.5 26.1 38 27.3 38 28.8C38 30.3 37.4 31.6 36.2 32.6C35 33.6 33.3 34.1 31.1 34.1C29.3 34.1 27.7 33.6 26.2 32.6L27.2 30.2Z"
        fill="#31A8FF"
      />
    </svg>

    <svg
      v-else-if="name === 'illustrator'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#330000" />
      <path
        d="M12 33L18.4 15.5H22.3L28.8 33H24.8L23.4 29H17.4L16 33H12ZM18.4 26.1H22.4L20.4 20L18.4 26.1Z"
        fill="#FF9A00"
      />
      <path
        d="M31.2 33V19.8H34.8V33H31.2ZM31.1 16.6C31.1 16 31.3 15.5 31.7 15.1C32.1 14.7 32.7 14.5 33.3 14.5C33.9 14.5 34.5 14.7 34.9 15.1C35.3 15.5 35.5 16 35.5 16.6C35.5 17.2 35.3 17.7 34.9 18.1C34.5 18.5 33.9 18.7 33.3 18.7C32.7 18.7 32.1 18.5 31.7 18.1C31.3 17.7 31.1 17.2 31.1 16.6Z"
        fill="#FF9A00"
      />
    </svg>

    <svg
      v-else-if="name === 'indesign'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#49021F" />
      <path
        d="M14 33V19.8H17.7V33H14ZM14 16.6C14 16 14.2 15.5 14.6 15.1C15 14.7 15.6 14.5 16.2 14.5C16.8 14.5 17.4 14.7 17.8 15.1C18.2 15.5 18.4 16 18.4 16.6C18.4 17.2 18.2 17.7 17.8 18.1C17.4 18.5 16.8 18.7 16.2 18.7C15.6 18.7 15 18.5 14.6 18.1C14.2 17.7 14 17.2 14 16.6Z"
        fill="#FF3366"
      />
      <path
        d="M21.5 33V15.5H26.8C29.4 15.5 31.3 16.3 32.6 17.8C33.9 19.3 34.6 21.5 34.6 24.3C34.6 27.1 33.9 29.3 32.5 30.7C31.2 32.2 29.2 33 26.6 33H21.5ZM25.2 29.8H26.7C28.2 29.8 29.3 29.3 30 28.2C30.7 27.2 31 25.8 31 24.2C31 22.6 30.7 21.2 30 20.2C29.3 19.2 28.1 18.7 26.6 18.7H25.2V29.8Z"
        fill="#FF3366"
      />
    </svg>

    <svg
      v-else-if="name === 'lightroom'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <path d="M13 33V15.5H16.8V29.8H23.5V33H13Z" fill="#31A8FF" />
      <path
        d="M25 33V20H28.4V22.2C28.9 21.5 29.6 20.9 30.4 20.5C31.2 20.1 32.1 19.9 33 20V23.6C31.7 23.4 30.7 23.8 29.9 24.6C29.2 25.5 28.8 26.6 28.8 28.1V33H25Z"
        fill="#31A8FF"
      />
    </svg>

    <svg
      v-else-if="name === 'premiere'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <path
        d="M12 33V16H18.7C20.8 16 22.4 16.5 23.4 17.5C24.4 18.5 24.9 19.9 24.9 21.6C24.9 23.3 24.4 24.6 23.4 25.6C22.4 26.6 20.8 27.1 18.7 27.1H15.8V33H12ZM15.8 24.1H18.5C19.6 24.1 20.4 23.8 20.8 23.3C21.3 22.8 21.5 22.1 21.5 21.2C21.5 20.3 21.3 19.6 20.8 19.1C20.3 18.6 19.5 18.4 18.4 18.4H15.8V24.1Z"
        fill="#EA77FF"
      />
      <path
        d="M26.2 33V20.2H29.6V22.3C30.2 21.6 30.9 21 31.7 20.6C32.5 20.2 33.4 20 34.3 20.1V23.5C33 23.3 32 23.7 31.2 24.5C30.5 25.4 30.1 26.5 30.1 28V33H26.2Z"
        fill="#EA77FF"
      />
    </svg>

    <svg
      v-else-if="name === 'canva'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="url(#canvaGrad)" />
      <g transform="translate(4, 16.5) scale(0.5)">
        <path
          d="M79.444 18.096c-.136 0-.26.088-.324.272-.82 2.34-1.928 3.732-2.84 3.732-.524 0-.736-.584-.736-1.5 0-2.292 1.372-7.152 2.064-9.368.08-.268.132-.508.132-.712 0-.644-.352-.96-1.224-.96-.94 0-1.952.368-2.936 2.092-.34-1.52-1.368-2.184-2.804-2.184-1.66 0-3.264 1.068-4.584 2.8-1.32 1.732-2.872 2.3-4.04 2.02.84-2.056 1.152-3.592 1.152-4.732 0-1.788-.884-2.868-2.312-2.868-2.172 0-3.424 2.072-3.424 4.252 0 1.684.764 3.416 2.444 4.256-1.408 3.184-3.464 6.064-4.244 6.064-1.008 0-1.304-4.932-1.248-8.46.036-2.024.204-2.128.204-2.74 0-.352-.228-.592-1.144-.592-2.136 0-2.796 1.808-2.896 3.884a10.233 10.233 0 0 1-.368 2.332c-.892 3.184-2.732 5.6-3.932 5.6-.556 0-.708-.556-.708-1.284 0-2.292 1.284-5.156 1.284-7.6 0-1.796-.788-2.932-2.272-2.932-1.748 0-4.06 2.08-6.248 5.976.72-2.984 1.016-5.872-1.116-5.872A2.886 2.886 0 0 0 36 9.916a.752.752 0 0 0-.432.728c.204 3.176-2.56 11.312-5.18 11.312-.476 0-.708-.516-.708-1.348 0-2.296 1.368-7.144 2.056-9.364.088-.288.136-.536.136-.752 0-.608-.376-.92-1.228-.92-.936 0-1.952.356-2.932 2.08-.344-1.52-1.372-2.184-2.808-2.184-2.356 0-4.988 2.492-6.144 5.74-1.548 4.336-4.668 8.524-8.868 8.524-3.812 0-5.824-3.172-5.824-8.184C4.068 8.312 9.38 2.4 13.32 2.4c1.884 0 2.784 1.2 2.784 3.04 0 2.228-1.244 3.264-1.244 4.112 0 .26.216.516.644.516 1.712 0 3.728-2.012 3.728-4.756S17.004.56 13.064.56C6.552.56 0 7.112 0 15.508c0 6.68 3.296 10.708 8.996 10.708 3.888 0 7.284-3.024 9.116-6.552.208 2.924 1.536 4.452 3.56 4.452 1.8 0 3.256-1.072 4.368-2.956.428 1.972 1.564 2.936 3.04 2.936 1.692 0 3.108-1.072 4.456-3.064-.02 1.564.336 3.036 1.692 3.036.64 0 1.404-.148 1.54-.708 1.428-5.904 4.956-10.724 6.036-10.724.32 0 .408.308.408.672 0 1.604-1.132 4.892-1.132 6.992 0 2.268.964 3.768 2.956 3.768 2.208 0 4.452-2.704 5.948-6.656.468 3.692 1.48 6.672 3.064 6.672 1.944 0 5.396-4.092 7.488-8.424.82.104 2.052.076 3.236-.76-.504 1.276-.8 2.672-.8 4.068 0 4.02 1.92 5.148 3.572 5.148 1.796 0 3.252-1.072 4.368-2.956.368 1.7 1.308 2.932 3.036 2.932 2.704 0 5.052-2.764 5.052-5.032 0-.6-.256-.964-.556-.964zM23.32 21.888c-1.092 0-1.52-1.1-1.52-2.74 0-2.848 1.948-7.604 4.008-7.604.9 0 1.24 1.06 1.24 2.356 0 2.892-1.852 7.988-3.728 7.988zm37.404-8.5c-.652-.776-.888-1.832-.888-2.772 0-1.16.424-2.14.932-2.14s.664.5.664 1.196c0 1.164-.416 2.864-.708 3.716zm8.468 8.5c-1.092 0-1.52-1.264-1.52-2.74 0-2.748 1.948-7.604 4.024-7.604.9 0 1.22 1.052 1.22 2.356 0 2.892-1.82 7.988-3.724 7.988z"
          fill="#FFFFFF"
        />
      </g>
      <defs>
        <linearGradient
          id="canvaGrad"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C4CC" />
          <stop offset="1" stop-color="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      v-else-if="
        name === 'aftereffects' || name === 'after-effects' || name === 'ae'
      "
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <path
        d="M11.5 33L17.7 15.5H21.5L27.8 33H24L22.6 29H16.7L15.3 33H11.5ZM17.7 26H21.6L19.6 20L17.7 26Z"
        fill="#9999FF"
      />
      <path
        d="M29.8 25.5C29.8 21.3 32.5 19 35.9 19C39.4 19 41.7 21.7 41.7 25.8V26.8H33.2C33.4 28.9 34.7 30.2 36.6 30.2C37.9 30.2 39 29.5 39.5 28.4L41.7 29.6C40.6 31.6 38.8 33 36.4 33C32.5 33 29.8 30.2 29.8 25.5ZM38.7 24.2C38.5 22.5 37.4 21.6 36 21.6C34.5 21.6 33.5 22.5 33.3 24.2H38.7Z"
        fill="#9999FF"
      />
    </svg>

    <svg
      v-else-if="
        name === 'davinci' || name === 'davinciresolve' || name === 'resolve'
      "
      class="w-full h-full"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="65" height="65" rx="14" fill="#14161C" />
      <circle
        cx="32.5"
        cy="32.5"
        r="24"
        fill="#20232B"
        stroke="rgba(255,255,255,0.06)"
        stroke-width="1.5"
      />
      <path
        d="M25 20.4C24.98 20.9 25.07 21.46 25.22 22.02C25.5 23.09 25.98 24.07 26.55 25C27.83 27.11 29.45 28.91 31.21 30.58C31.35 30.72 31.52 30.84 31.71 30.93C31.89 31.02 32.08 31.02 32.27 30.94C32.45 30.86 32.61 30.74 32.75 30.59C33.36 29.96 33.96 29.33 34.54 28.68C35.35 27.75 36.13 26.8 36.83 25.78C37.47 24.85 38.04 23.88 38.46 22.82C38.88 21.77 39.08 20.69 38.94 19.55C38.71 17.67 37.95 16.08 36.57 14.83C34.95 13.36 33.06 12.77 30.94 13.1C27.48 13.63 24.98 16.82 25 20.4Z"
        fill="url(#dvCyan)"
      />
      <path
        d="M42.89 46C42.46 46.01 41.97 45.96 41.48 45.85C40.04 45.54 38.81 44.88 37.87 43.72C37.29 43.01 36.81 42.24 36.4 41.43C35.91 40.47 35.5 39.48 35.14 38.47C34.71 37.26 34.34 36.01 34.05 34.75C33.89 34.05 34.07 33.61 34.85 33.37C35.84 33.06 36.84 32.78 37.85 32.56C39.53 32.19 41.23 31.95 42.96 32.01C43.45 32.03 43.94 32.08 44.42 32.17C45.82 32.41 47.01 33.06 47.98 34.08C49.63 35.81 50.29 37.89 49.88 40.25C49.3 43.62 46.3 46.03 42.89 46Z"
        fill="url(#dvRed)"
      />
      <path
        d="M21.11 46C21.54 46.01 22.03 45.96 22.52 45.85C23.96 45.54 25.19 44.88 26.13 43.72C26.71 43.01 27.19 42.24 27.6 41.43C28.09 40.47 28.5 39.48 28.86 38.47C29.29 37.26 29.66 36.01 29.95 34.75C30.11 34.05 29.93 33.61 29.15 33.37C28.16 33.06 27.16 32.78 26.15 32.56C24.47 32.19 22.77 31.95 21.04 32.01C20.55 32.03 20.06 32.08 19.58 32.17C18.18 32.41 16.99 33.06 16.02 34.08C14.37 35.81 13.71 37.89 14.12 40.25C14.7 43.62 17.7 46.03 21.11 46Z"
        fill="url(#dvYellow)"
      />
      <defs>
        <linearGradient
          id="dvCyan"
          x1="25"
          y1="13"
          x2="39"
          y2="31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#38E1FF" />
          <stop offset="1" stop-color="#0072CE" />
        </linearGradient>
        <linearGradient
          id="dvRed"
          x1="34"
          y1="32"
          x2="50"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF5268" />
          <stop offset="1" stop-color="#C80F2E" />
        </linearGradient>
        <linearGradient
          id="dvYellow"
          x1="14"
          y1="32"
          x2="30"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE853" />
          <stop offset="1" stop-color="#FF9000" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      v-else-if="name === 'capcut'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#000000" />
      <g transform="translate(6.5, 6.5) scale(1.45)">
        <path
          d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
          fill="#FFFFFF"
        />
      </g>
    </svg>

    <svg
      v-else-if="name === 'sketchup'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#EA212D" />
      <path
        d="M14 15L24 10L34 15V27L24 38L14 27V15Z"
        fill="#FFFFFF"
        fill-opacity="0.2"
      />
      <path d="M14 15L24 20V38L14 27V15Z" fill="#FFFFFF" fill-opacity="0.9" />
      <path d="M34 15L24 20V38L34 27V15Z" fill="#FFFFFF" fill-opacity="0.6" />
      <path d="M14 15L24 10L34 15L24 20L14 15Z" fill="#FFFFFF" />
    </svg>

    <svg
      v-else-if="name === 'coreldraw'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#2E7D32" />
      <circle cx="24" cy="24" r="14" fill="#66BB6A" />
      <path
        d="M24 12C20 12 16 16 16 22C16 28 20 36 24 36C28 36 32 28 32 22C32 16 28 12 24 12Z"
        fill="#FFFFFF"
      />
      <path
        d="M24 16C22 16 20 18 20 22C20 26 22 31 24 31C26 31 28 26 28 22C28 18 26 16 24 16Z"
        fill="#2E7D32"
      />
    </svg>

    <svg
      v-else-if="name === 'codeigniter'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#EE4326" />
      <path
        d="M24 10C24 10 20 17 20 22C20 26 22 28 24 31C22 28 21 24 22 21C22 17 24 15 24 15C24 15 25 18 26 20C27 22 28 25 27 28C28 26 29 23 28 20C27 15 24 10 24 10Z"
        fill="#FFFFFF"
      />
      <path
        d="M24 38C18 38 14 33 14 27C14 21 18 16 20 14C18 18 17 22 19 25C20 26 21 27 21 27C21 27 20 24 21 22C22 19 24 17 24 17C24 17 25 20 27 22C29 25 29 29 27 32C29 30 30 27 29 23C32 27 34 32 32 35C30 37 27 38 24 38Z"
        fill="#FFFFFF"
      />
    </svg>

    <svg
      v-else-if="name === 'mysql'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#00758F" />
      <path
        d="M29.5 28.5C28.2 27 27.5 24.8 27.5 22.8C27.5 19.5 29.2 16.5 32 15C28.5 13.8 24.2 14.5 21.8 17.5C20 19.8 19.5 22.8 20.2 25.8C18.5 25.2 16.5 25.8 15.5 27.2C14.5 28.8 15 31 16.8 32C19.2 33.2 22.2 32.8 24.5 31.5C26.5 32.5 28.8 33 31.2 32.8C30.5 31.5 29.8 30 29.5 28.5Z"
        fill="#F29111"
      />
      <circle cx="28.5" cy="18.5" r="1.5" fill="#FFFFFF" />
    </svg>

    <svg
      v-else-if="name === 'tailwind'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#0B1120" />
      <path
        d="M24 16C21.6 16 20.1 17.2 19.5 19.6C20.4 18.4 21.4 17.9 22.5 18.1C23.3 18.2 23.9 18.8 24.5 19.4C25.5 20.4 26.7 21.6 29.2 21.6C31.6 21.6 33.1 20.4 33.7 18C32.8 19.2 31.8 19.7 30.7 19.5C29.9 19.4 29.3 18.8 28.7 18.2C27.7 17.2 26.5 16 24 16ZM18.8 24C16.4 24 14.9 25.2 14.3 27.6C15.2 26.4 16.2 25.9 17.3 26.1C18.1 26.2 18.7 26.8 19.3 27.4C20.3 28.4 21.5 29.6 24 29.6C26.4 29.6 27.9 28.4 28.5 26C27.6 27.2 26.6 27.7 25.5 27.5C24.7 27.4 24.1 26.8 23.5 26.2C22.5 25.2 21.3 24 18.8 24Z"
        fill="#38BDF8"
      />
    </svg>

    <svg
      v-else-if="name === 'vue'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#1A1A1A" />
      <path d="M24 35L11 13H17.5L24 24L30.5 13H37L24 35Z" fill="#42B883" />
      <path
        d="M24 26.5L16.2 13H21L24 18.5L27 13H31.8L24 26.5Z"
        fill="#35495E"
      />
    </svg>

    <svg
      v-else-if="name === 'react'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#0D1117" />
      <circle cx="24" cy="24" r="3.2" fill="#00D8FE" />
      <ellipse
        cx="24"
        cy="24"
        rx="14"
        ry="5.5"
        stroke="#00D8FE"
        stroke-width="1.8"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="14"
        ry="5.5"
        stroke="#00D8FE"
        stroke-width="1.8"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="14"
        ry="5.5"
        stroke="#00D8FE"
        stroke-width="1.8"
        transform="rotate(120 24 24)"
      />
    </svg>

    <svg
      v-else-if="name === 'nextjs' || name === 'next.js'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#000000" />
      <circle
        cx="24"
        cy="24"
        r="17"
        fill="#000000"
        stroke="rgba(255,255,255,0.2)"
        stroke-width="1.5"
      />
      <path
        d="M18 15V33M29.5 15V26M18 15L32 32.5"
        stroke="#FFFFFF"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <!-- Official DAITIGN DV Brand Mark for DaitignVault & Daiflix -->
    <div
      v-else-if="
        name === 'daitignvault' ||
        name === 'vault' ||
        name === 'dvault' ||
        name === 'daiflix'
      "
      class="w-full h-full rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-[#09331e]"
    >
      <img
        :src="logoDvSquare"
        alt="DAITIGN DV Logo"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>

    <!-- Official Coffee Bean Brand Mark for Caffeine Jitters -->
    <div
      v-else-if="name === 'cafe' || name === 'coffee' || name === 'caffeine'"
      class="w-full h-full rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white"
    >
      <img
        :src="logoCoffeeBean"
        alt="Coffee Bean Logo"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>

    <!-- Official Davao del Norte State College (DNSC) Logo -->
    <div
      v-else-if="name === 'dnsc' || name === 'dnsc-qms'"
      class="w-full h-full rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white p-0.5"
    >
      <img
        :src="logoDnsc"
        alt="Davao del Norte State College Logo"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Pharmacy Care Cross & Mortar Emblem for M5 Pharmacy -->
    <svg
      v-else-if="name === 'pharmacy' || name === 'm5' || name === 'm5-pharmacy'"
      class="w-full h-full"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill="url(#pharmacyGrad)" />
      <defs>
        <linearGradient
          id="pharmacyGrad"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#10B981" />
          <stop offset="1" stop-color="#047857" />
        </linearGradient>
      </defs>
      <!-- Medical Care Cross Silhouette -->
      <path
        d="M21 10H27V21H38V27H27V38H21V27H10V21H21V10Z"
        fill="white"
        fill-opacity="0.22"
      />
      <!-- Mortar & Pestle Care Vector -->
      <path
        d="M15 25C15 29.97 19.03 34 24 34C28.97 34 33 29.97 33 25H15Z"
        fill="white"
      />
      <path
        d="M14 23.5H34C34.55 23.5 35 23.95 35 24.5C35 25.05 34.55 25.5 34 25.5H14C13.45 25.5 13 25.05 13 24.5C13 23.95 13.45 23.5 14 23.5Z"
        fill="white"
      />
      <path
        d="M19 34H29V35.5C29 36.05 28.55 36.5 28 36.5H20C19.45 36.5 19 36.05 19 35.5V34Z"
        fill="white"
      />
      <path
        d="M28 12.5L19.5 23L22 25L30.5 14.5C31 14 30.5 12.5 29.5 12.5H28Z"
        fill="#FCD34D"
      />
    </svg>

    <!-- FontAwesome fallback for brand icons -->
    <font-awesome-icon
      v-else-if="faIcon"
      :icon="faIcon"
      class="w-full h-full"
    />

    <!-- Generic code fallback -->
    <font-awesome-icon
      v-else
      :icon="['fas', 'code']"
      class="w-full h-full text-emerald-400"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import logoDvSquare from "@/assets/img/logo_dv_square.png";
import logoCoffeeBean from "@/assets/img/logo_coffee_bean.png";
import logoDnsc from "@/assets/img/logo_dnsc.png";

const props = defineProps<{
  name: string;
  customClass?: string;
}>();

const faIcon = computed(() => {
  const map: Record<string, [string, string]> = {
    figma: ["fab", "figma"],
    laravel: ["fab", "laravel"],
    php: ["fab", "php"],
    aws: ["fab", "aws"],
    react: ["fab", "react"],
    bootstrap: ["fab", "bootstrap"],
    javascript: ["fab", "js"],
    js: ["fab", "js"],
    html5: ["fab", "html5"],
    html: ["fab", "html5"],
    css: ["fab", "css3-alt"],
    css3: ["fab", "css3-alt"],
    github: ["fab", "github"],
    linkedin: ["fab", "linkedin"],
    instagram: ["fab", "instagram"],
    telegram: ["fab", "telegram"],
    facebook: ["fab", "facebook"],
  };
  return map[props.name.toLowerCase()];
});
</script>

<style scoped>
.tech-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}
</style>
