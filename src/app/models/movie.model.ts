export interface Movie {
    title: string;
    trailerUrl: string;
    originalSourceUrl: string;
    coverUrl: string;
    description: string;
    imdb_id?: number;
    category: [{
        name: string;
    }];
    imdbScore: number;
    releaseDate: string;
    images: [{
        imageUrl: string;
    }];
}
