export default (metaTagName: string) => {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i += 1) {
        if (metas[i].getAttribute('property') === metaTagName) {
            return metas[i].getAttribute('content');
        }
    }
    return '';
};
