import { LoadMoreStyled } from './LoadMore.styled';


export const LoadMore = ({buttonClick}) => {

console.log("Load more")
  return <LoadMoreStyled onClick={buttonClick}>Load more</LoadMoreStyled>;
};
