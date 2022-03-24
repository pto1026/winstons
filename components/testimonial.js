export default function Testimonial({ children, src, name }) {
  return (
    <figure className="testimonial">
      <p className="testimonial__text">
        {children}
      </p>
      <div className="testimonial__byline">
        <img
          className="testimonial__photo"
          src={src}
          alt="Profile Photo"
        />
        <p className="testimonial__name">
          {name}
        </p>
      </div>
    </figure>
  );
}
