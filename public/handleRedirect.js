/* eslint-disable func-names */
(function (l) {
    if (l.search[1] === '/') {
        const decoded = l.search
            .slice(1)
            .split('&')
            // eslint-disable-next-line func-names
            .map(function (s) {
                return s.replace(/~and~/g, '&');
            })
            .join('?');
        window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash,
        );
    }
})(window.location);