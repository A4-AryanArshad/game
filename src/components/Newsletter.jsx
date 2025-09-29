import { Mail, Send } from 'lucide-react'
const Newsletter = () => {
  return (
    <section className="newsletter" aria-label="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <h2 className="h2">Our <span className="span">Newsletter</span></h2>
          <form className="newsletter-form">
            <div className="input-wrapper skewBg">
              <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required className="email-field" />
              <Mail size={20} />
            </div>
            <button type="submit" className="btn newsletter-btn skewBg"><span className="span">Subscribe</span><Send size={16} aria-hidden="true" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
