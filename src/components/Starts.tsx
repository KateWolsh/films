import Star from './Star'
import StarsProps from '../../src/stars'

const Stars: React.FC<StarsProps> = ( {count} ) => {
    const isValidCount = typeof count === 'number' && count >= 1 && count <= 5;
    
    return isValidCount ? (
        <ul className="card-body-stars u-clearfix">
        {Array.from({ length: count }).map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  ) : null
  };
  
  export default Stars