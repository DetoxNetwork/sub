/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/sub/uv/service/',
    bare: 'https://sublink-supremerubisco.koyeb.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://raw.githubusercontent.com/DetoxNetwork/sub/main/uv/uv.handler.js',
    client: 'https://raw.githubusercontent.com/DetoxNetwork/sub/main/uv/uv.client.js',
    bundle: 'https://raw.githubusercontent.com/DetoxNetwork/sub/main/uv/uv.bundle.js',
    config: '/sub/uv/uv.config.js',
    sw: 'https://raw.githubusercontent.com/DetoxNetwork/sub/main/uv/uv.sw.js',
};
