export interface Movie {
    title: string;
    trailerUrl: string;
    originalSourceUrl: string;
    coverUrl: string;
    description: string;
    imdbId?: number;
    category: [{
        id?: number;
        name: string;
    }];
    imdbScore: number;
    releaseDate: string;
    id?: number;
    images: [{
        id?: number;
        imageUrl: string;
    }];
}
