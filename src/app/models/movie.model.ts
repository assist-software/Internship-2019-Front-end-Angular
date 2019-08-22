export interface Movie {
    title: string;
    trailerUrl: string;
    originalSourceUrl: string;
    coverUrl: string;
    description: string;
    imdbId: number;
    category: [{
        id: number;
        name: string;
    }];
    imdbScore: number;
    releaseDate: Date;
    id: number;
}
