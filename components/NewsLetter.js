import s from 'styled-components'

const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

const NewsLetterWrapper = s.div`
  .newsletter {
    justify-content: center;
    margin: 1rem 0 2rem 0;
    padding: 0 15rem;

    @media(max-width: 768px) {
      padding: 0 2rem;
    }
  }

  img {
    :hover {
      opacity: 70%
    }
  }
`

const NewsLetter = () => (
  <StyledAnchor href="https://thedp.us2.list-manage.com/subscribe?u=a96885e3aa3f8131c872ee329&id=370b4800ba" target="_blank">
    <NewsLetterWrapper>
      <div className="row newsletter">
        <div className="col">
          <img src="/newsletter-pink.png" className="img-fluid" />
        </div>
      </div>
    </NewsLetterWrapper>
  </StyledAnchor>
)

export default NewsLetter