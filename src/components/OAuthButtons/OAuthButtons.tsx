'use client';
import { signIn } from 'next-auth/react';

export default function OAuthButtons() {
  return (
    <>
      <button
        className="w-full rounded-md border-[1px] border-[#633CFF] py-4 flex flex-row justify-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          signIn('github', { callbackUrl: '/dashboard' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
          <g clip-path="url(#a)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.01.568C5.633.568.48 5.976.48 12.667c0 5.348 3.302 9.875 7.884 11.478.572.12.782-.26.782-.58 0-.281-.019-1.243-.019-2.245-3.207.722-3.875-1.442-3.875-1.442-.515-1.402-1.279-1.763-1.279-1.763-1.05-.74.076-.74.076-.74 1.165.08 1.776 1.241 1.776 1.241 1.03 1.843 2.691 1.322 3.36 1.002.095-.782.4-1.322.725-1.623-2.558-.28-5.25-1.322-5.25-5.97 0-1.322.458-2.403 1.184-3.244-.115-.3-.516-1.543.114-3.206 0 0 .974-.32 3.169 1.242.94-.264 1.909-.4 2.882-.4.974 0 1.966.14 2.883.4 2.195-1.562 3.169-1.242 3.169-1.242.63 1.663.229 2.905.114 3.206.745.84 1.183 1.922 1.183 3.245 0 4.647-2.69 5.669-5.268 5.97.42.38.783 1.1.783 2.243 0 1.622-.02 2.924-.02 3.325 0 .32.21.701.783.581 4.582-1.603 7.884-6.13 7.884-11.478.019-6.691-5.154-12.1-11.51-12.1Z"
              fill="#24292F"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" transform="translate(.48 .568)" d="M0 0h23.04v24H0z" />
            </clipPath>
          </defs>
        </svg>
        <h6 className="font-medium text-black"> Github</h6>
      </button>
      <button
        className="w-full rounded-md border-[1px] border-[#633CFF] py-4 flex flex-row justify-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          signIn('google', { callbackUrl: '/dashboard' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
          <path
            d="M12.745 10.386v4.647h6.59c-.29 1.495-1.158 2.76-2.46 3.611l3.974 3.022c2.315-2.095 3.651-5.171 3.651-8.826 0-.85-.078-1.669-.223-2.454H12.745Z"
            fill="#4285F4"
          />
          <path
            d="m5.882 14.852-.896.672-3.173 2.422a12.27 12.27 0 0 0 10.932 6.622c3.306 0 6.078-1.07 8.104-2.902l-3.974-3.022c-1.091.72-2.483 1.156-4.13 1.156-3.184 0-5.889-2.105-6.858-4.942l-.005-.006Z"
            fill="#34A853"
          />
          <path
            d="M1.813 7.19a11.66 11.66 0 0 0 0 10.756c0 .01 4.075-3.099 4.075-3.099a7.06 7.06 0 0 1-.39-2.28c0-.796.145-1.56.39-2.28L1.813 7.19Z"
            fill="#FBBC05"
          />
          <path
            d="M12.745 5.346c1.803 0 3.406.61 4.686 1.789l3.507-3.436C18.812 1.757 16.05.568 12.745.568c-4.787 0-8.917 2.694-10.932 6.621l4.075 3.099c.968-2.837 3.673-4.942 6.857-4.942Z"
            fill="#EA4335"
          />
        </svg>
        <h6 className="font-medium text-black">Google</h6>
      </button>
    </>
  );
}
