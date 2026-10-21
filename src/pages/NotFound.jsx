import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-6xl font-bold text-gold">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy">Page not found</h1>
      <div className="mt-8"><Button to="/">Back to Home</Button></div>
    </Container>
  )
}
