/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
    sassOptions: {
        includePaths: [path.resolve(new URL('./styles', import.meta.url).pathname)],
    },
};

export default nextConfig;
