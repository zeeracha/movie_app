const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7ac9358c989d413dea66ef3d2dbc07e8',
    originalImage: (imgPath) => `https://image.tbpmmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;