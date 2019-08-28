export interface Movie {
    title: string;
    trailerUrl: string;
    originalSourceUrl: string;
    coverUrl: string;
    description: string;
    imdbId?: number;
    category: [{
        name: string;
    }];
    imdbScore: number;
    releaseDate: string;
    images: [{
        imageUrl: string;
    }];
    id?: number;
}
