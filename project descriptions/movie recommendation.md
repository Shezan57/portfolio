# Movie Recommendation System

This project implements a movie recommendation system using the TMDb 5000 Movie and Credits datasets. The main focus is on content-based filtering, utilizing various features of movies such as genres, keywords, cast, crew, and overviews to recommend similar movies.

## Folder Structure

- `movie_recommend_system_model_building.ipynb`: Main notebook containing all data preprocessing, feature engineering, and model building steps.
- `tmdb_5000_movies.csv` & `tmdb_5000_credits.csv`: Datasets containing movie metadata and cast/crew information.
- `movies_dict.pkl`: Preprocessed dictionary of movies (used for fast loading and recommendations).
- `.idea/` and `app/`: Project metadata and possible frontend or deployment code.
- **Note:** The similarity.pkl file is not included due to size constraints.

## Pipeline Overview

### 1. Data Loading
- Reads the movies and credits data using Pandas.
- Inspects dataframes for structure and cleans if necessary.

### 2. Preprocessing
- Merges movie and credit datasets on the movie title.
- Selects key columns: `movie_id`, `title`, `overview`, `genres`, `keywords`, `cast`, `crew`.
- Handles missing values and removes duplicates.

### 3. Feature Engineering
- Parses stringified lists/dictionaries (`genres`, `keywords`, etc.) using `ast.literal_eval`.
- Extracts relevant features:
  - `genres` and `keywords`: List of genre/keyword names.
  - `cast`: Up to 3 main cast members.
  - `crew`: Director's name, etc. (details in notebook).
- All lists are flattened for vectorization.

### 4. Vectorization & Similarity
- Combines all text features for each movie into a single string ("tags").
- Uses CountVectorizer (Bag of Words) to convert tags into vectors.
- Computes cosine similarity between movies using these vectors.

### 5. Recommendation
- Given a movie title, the system:
  - Finds its vector.
  - Computes similarities with all other movies.
  - Returns the most similar movies.

## Usage

1. Open `movie_recommend_system_model_building.ipynb` in Jupyter.
2. Run all cells to preprocess data and build the model.
3. Use the provided function to get recommendations by movie title.

## Data Sources

- [TMDb 5000 Movie Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata)

## Limitations

- The `similarity.pkl` file is not included due to size.
- Recommendations are purely content-based (no user ratings).

## Credits

- Developed as part of ML Projects by [Shezan57](https://github.com/Shezan57).
- Data from TMDb (The Movie Database).

---

**Existing Readme note:**  
This folder contains all files except `similarity.pkl` file as it is too large to upload.
