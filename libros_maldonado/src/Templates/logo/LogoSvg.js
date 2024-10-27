import React from 'react'
import { useNavigate } from 'react-router-dom';

//<!-- Created with Inkscape (http://www.inkscape.org/) -->
export default function LogoSvg(props) {
  const navigate = useNavigate();

  const navigateLogoClick = () => {
    navigate('/');
  };

  return (
    <svg 
      onClick={navigateLogoClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      width={45}
      height={60}
      viewBox="0 0 12.087 16.051"
      id='logo'
      {...props}
    >
    <defs>
        <linearGradient id="b">
          <stop offset={0} style={{ stopColor: "#ad0a0b", stopOpacity: 1 }} />
          <stop offset={1} style={{ stopColor: "#0459af", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="a">
          <stop offset={0} style={{ stopColor: "#0459af", stopOpacity: 1 }} />
          <stop offset={1} style={{ stopColor: "#ad0a0b", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="c">
          <stop offset={0} style={{ stopColor: "#042479", stopOpacity: 1 }} />
          <stop offset={1} style={{ stopColor: "#ad0a0b", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          href="#a"
          id="d"
          x1={-0.006}
          x2={9.519}
          y1={10.771}
          y2={10.771}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          href="#b"
          id="e"
          x1={4.701}
          x2={4.701}
          y1={0.066}
          y2={18.974}
          gradientTransform="matrix(1.27697 0 0 .71813 -1.414 .233)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          href="#c"
          id="f"
          x1={112.713}
          x2={111.654}
          y1={77.523}
          y2={251.619}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
    <g
      style={{
        strokeWidth: 0.982792,
      }}
    >
      <path
        d="M10.575.335h-11.83v15.203l5.848-1.753 5.982 1.753z"
        style={{
          display: "inline",
          opacity: 1,
          fill: "url(#e)",
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 0.255526,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 0.00369688,
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(1 0 0 1.03532 1.383 -.214)"
      />
      <g
        style={{
          opacity: 1,
          fill: "#ad0a0b",
          fillOpacity: 1,
          stroke: "#ebebeb",
          strokeWidth: 6.04007,
          strokeOpacity: 1,
        }}
      >
        <g
          style={{
            display: "inline",
            fill: "#ad0a0b",
            fillOpacity: 1,
            stroke: "#ebebeb",
            strokeWidth: 6.04007,
            strokeOpacity: 1,
          }}
        >
          <path
            d="M-5.898 106.373s3.403 4.3 5.216 5.516c2.678 1.797 8.561 2.597 12.215 3.445 2.566.595 3.575 1.517 3.575 1.517l5.277-4.42s-1.563-.9-4.577-1.411c-3.91-.664-10.338-1.03-13.135-2.8-1.806-1.141-4.034-4.927-4.034-4.927zM-6.714 73.735c5.312-.508 9.723 1.412 14.366 3.596 2.823 1.498 7.026 5.548 8.018 5.225 1.613-.526 4.985-2.6 4.985-2.6s-2.37-.582-3.455-1.114c-4.397-2.16-7.684-6.14-12.084-8.294C3.141 69.58-1.18 68.53-1.18 68.53zM-4.75 139.998c3.2 2.389 7.484 2.39 10.323 4.898 2.223 1.965 3.579 5.27 4.726 7.483 1.146 2.213 1.433 2.857 3.116 4.92 1.682 2.064 4.01 3.703 4.01 3.703l2.87-5.693s-2.512-2.514-3.61-3.902c-2.55-3.226-3.732-8.006-6.862-10.228-2.97-2.109-10.692-4.5-10.692-4.5z"
            style={{
              display: "inline",
              opacity: 1,
              fill: "#ad0a0b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.05504 0 0 .05621 5.69 1.659)"
          />
          <path
            d="M20.264 155.303s5.219 3.56 6.813 6.139c.62 1.003 1.477 2.4.922 3.414-.544.995-2.047.805-3.08.632-2.82-.472-7.458-4.434-7.458-4.434s-.474-2.884.226-4.079c.513-.874 2.577-1.672 2.577-1.672z"
            style={{
              display: "inline",
              opacity: 1,
              fill: "#ad0a0b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.05504 0 0 .05621 5.69 1.659)"
          />
        </g>
        <g
          style={{
            display: "inline",
            opacity: 1,
            fill: "url(#f)",
            fillOpacity: 1,
            stroke: "#ebebeb",
            strokeWidth: 6.04007,
            strokeOpacity: 1,
          }}
          transform="matrix(.05504 0 0 .05621 21.065 -.285)"
        >
          <rect
            width={16.153}
            height={132.877}
            x={-280.072}
            y={88.046}
            ry={0}
            style={{
              display: "inline",
              opacity: 1,
              fill: "#042479",
              fillOpacity: 1,
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          />
          <path
            d="m-295.644 55.343 4.038-.057s4.763 1.694 6.32 2.688c1.556.993 2.438 1.76 3.126 2.818.593.91.992 1.998 1.02 2.95l4.19-8.466 10.025-.028 3.962 8.516c.013-1.118.405-2.128 1.081-2.993.791-1.012 1.544-1.733 3.383-2.79 1.839-1.056 4.958-1.902 7.627-2.81l3.404.23s-2.125 1.31-3.239 2.01c-1.113.7-8.872 6.098-10.392 8.418-1.52 2.321-1.499 2.33-1.81 3.658-1.257 5.357-.031 16.52-.031 16.52l-18.192.023s1.304-11.538-.146-17.017c-.321-1.213-.326-1.276-1.832-3.277-1.505-2-4.006-4.277-6.894-6.453-1.587-1.195-3.167-2.638-5.64-3.94z"
            style={{
              opacity: 1,
              fill: "#042479",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeLinecap: "square",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
          />
          <rect
            width={18.915}
            height={2.167}
            x={-281.507}
            y={115.441}
            ry={0.677}
            style={{
              display: "inline",
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          />
          <rect
            width={19.409}
            height={2.163}
            x={-281.755}
            y={86.11}
            ry={0.676}
            style={{
              display: "inline",
              opacity: 1,
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          />
          <path
            d="M290.797 74.683a26.65 26.693 0 0 1-20.247 26.045 26.65 26.693 0 0 1-30.04-13.58 26.65 26.693 0 0 1 6.107-32.437"
            style={{
              fill: "#042479",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611218,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="rotate(155.647) skewX(-.104)"
          />
          <rect
            width={50.802}
            height={3.587}
            x={-296.83}
            y={51.664}
            ry={1.462}
            style={{
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 1.57041,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
          />
          <path
            stroke="none"
            d="M-187.279 216.684a.488 3.065 0 0 1 .634-1.72.488 3.065 0 0 1 .274 3.979.488 3.065 0 0 1-.634 1.72.488 3.065 0 0 1-.274-3.978l.454 1.129z"
            style={{
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 0,
              paintOrder: "markers stroke fill",
            }}
            transform="rotate(44.673) skewX(-.018)"
          />
          <path
            stroke="none"
            d="M-225.233 256.932a.29.701 0 0 1 .375-.391.29.701 0 0 1 .163.908.29.701 0 0 1-.374.397.29.701 0 0 1-.165-.905"
            style={{
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.623839,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 0,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.60418 .79685 -.59564 .80325 0 0)"
          />
        </g>
        <g
          style={{
            fill: "#ad0a0b",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 6.04007,
            strokeOpacity: 1,
          }}
        >
          <path
            d="M-5.6 106.64c-3.048-1.614-.324-7.323 1.76-10.034 3.643-4.739 11.818-3.821 16.362-7.744 2.512-2.17 2.3-7.197 5.47-8.253 1.404-.467 3.857-1.642 4.195 1.451.16 1.476-.453 2.972-1.058 4.317-1.536 3.416-3.627 6.597-6.34 9.112-1.384 1.282-8.755 1.822-12.545 4.007-3.076 1.775-4.703 8.808-7.843 7.144z"
            style={{
              display: "inline",
              opacity: 1,
              fill: "#ad0a0b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#ebebeb",
              strokeWidth: 0.611217,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.05504 0 0 .05621 5.69 1.656)"
          />
          <path
            d="M-5.097 139.948c-3.304-1.933.295-8.113 2.81-10.967 3.338-3.79 10.175-2.62 14.164-5.75 3.475-2.726 3.27-10.137 7.686-10.7 1.34-.17 2.724 1.26 3.105 2.555.427 1.447-.753 2.972-1.357 4.317-1.536 3.416-3.197 6.53-5.91 9.043-1.383 1.283-8.638 2.073-12.4 4.274-3.135 1.836-4.962 9.063-8.098 7.228z"
            style={{
              display: "inline",
              fill: "#ad0a0b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#fff",
              strokeWidth: 0.611217,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.05504 0 0 .05621 5.69 1.656)"
          />
          <g
            style={{
              opacity: 1,
              fill: "#ad0a0b",
              fillOpacity: 1,
              stroke: "#ebebeb",
              strokeWidth: 6.41424,
              strokeOpacity: 1,
            }}
          >
            <path
              d="M14.292 56.076c-4.044 3.706-9.723 5.481-13.399 9.552-2.074 2.297-1.777 6.787-4.594 8.07-1.106.503-2.74.165-3.574-.72-1.382-1.466-1.088-3.987-.838-5.986C-6.856 56.954 7.804 52.035 10.079 49.64c3.429-3.61 4.287-9.01 6.917-13.237 1-1.607 2.017-3.243 3.353-4.584 1.948-1.954 4.107-3.877 6.665-4.91 3.64-1.472 4.687.642 4.737.748 1.156 2.46-.098 9.194-3.76 13.711-.986 1.216-2.537 1.85-3.66 2.94-3.7 3.591-6.238 8.284-10.04 11.768z"
              style={{
                display: "inline",
                opacity: 1,
                fill: "#ad0a0b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "#ebebeb",
                strokeWidth: 0.649081,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "markers stroke fill",
              }}
              transform="matrix(.04735 .01385 -.0117 .05453 6.413 1.84)"
            />
            <path
              d="M22.218 33.624a.943 1.006 0 0 1 1.224-.565.943 1.006 0 0 1 .53 1.306.943 1.006 0 0 1-1.225.564.943 1.006 0 0 1-.529-1.305l.877.37z"
              style={{
                display: "inline",
                opacity: 1,
                fill: "#ad0a0b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "#ebebeb",
                strokeWidth: 0.706354,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "markers stroke fill",
              }}
              transform="matrix(.04735 .01385 -.0117 .05453 6.413 1.84)"
            />
            <path
              fill="none"
              d="M17.202 42.308c.536.42.826 2.434 2.214 2.87 2.104.658 5.686-1.346 5.686-1.346"
              style={{
                display: "inline",
                opacity: 1,
                fill: "#fff",
                fillOpacity: 0,
                fillRule: "evenodd",
                stroke: "#ebebeb",
                strokeWidth: 0.324542,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "markers stroke fill",
              }}
              transform="matrix(.04735 .01385 -.0117 .05453 6.413 1.84)"
            />
          </g>
        </g>
        <g
          style={{
            opacity: 1,
            fill: "#ad0a0b",
            fillOpacity: 1,
            stroke: "#ebebeb",
            strokeWidth: 5.25177,
            strokeOpacity: 1,
          }}
        >
          <path
            d="M-38.213 198.687c1.194-1.256 1.957-4.749 1.679-7.684-.215-2.265-.82-4.119-1.657-5.072l-.338-.386h93.131V199.04H-38.55Z"
            style={{
              display: "inline",
              opacity: 1,
              fill: "#e4e4e4",
              fillOpacity: 0.996078,
              fillRule: "nonzero",
              stroke: "#808c9f",
              strokeWidth: 1.36545,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers stroke fill",
            }}
            transform="matrix(.054 0 0 .0758 5.692 -1.833)"
          />
          <g
            style={{
              opacity: 1,
              fill: "#ad0a0b",
              fillOpacity: 1,
              stroke: "#ad0a0b",
              strokeWidth: 5.25177,
              strokeOpacity: 1,
            }}
            transform="matrix(.054 0 0 .0758 5.692 -1.833)"
          >
            <rect
              width={94.814}
              height={0.625}
              x={-40.094}
              y={199.255}
              rx={0}
              ry={0.026}
              style={{
                display: "inline",
                opacity: 1,
                fill: "#ad0a0b",
                fillOpacity: 1,
                stroke: "#ad0a0b",
                strokeWidth: 1.36545,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
            />
            <path
              d="M-54.766 199.877a1.763 7.586 0 0 1-1.552-3.694 1.763 7.586 0 0 1-.02-7.631 1.763 7.586 0 0 1 1.532-3.845l.001 7.586z"
              style={{
                display: "inline",
                opacity: 1,
                fill: "#ad0a0b",
                fillOpacity: 1,
                stroke: "#ad0a0b",
                strokeWidth: 1.36545,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              transform="scale(-1 1)"
            />
            <rect
              width={94.814}
              height={0.625}
              x={-40.093}
              y={184.708}
              ry={0.038}
              style={{
                display: "inline",
                opacity: 1,
                fill: "#ad0a0b",
                fillOpacity: 1,
                stroke: "#ad0a0b",
                strokeWidth: 1.36545,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
  );
}