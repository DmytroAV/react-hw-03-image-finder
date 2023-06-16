import { LoadMoreBtn } from './Button.styled';

export const Button = () => {
  return (
    <>
      <LoadMoreBtn type="submit" className="button">
        <span className="button-label">Load more</span>
      </LoadMoreBtn>
    </>
  );
};
