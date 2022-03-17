import { memo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  card: {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
  }
}

export function MovieCardContent({card}: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={card.poster}
        alt={card.title}
      />

      <div>
        <div className="movie-info">
          <span>{card.title}</span>
          <div className="meta">
            <div>
              <Star /> {card.rating}
            </div>

            <div>
              <Clock /> {card.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard = memo(MovieCardContent, (prevProps, nextProps) => {
  return Object.is(prevProps.card, nextProps.card)
}) 