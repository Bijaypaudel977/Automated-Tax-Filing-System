import { Terminal } from 'lucide-react'
import { useForm } from 'react-hook-form'
import './App.css'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './components/ui/input-otp'
import { ToastAction } from './components/ui/toast'
import { useToast } from './components/ui/use-toast'
import Login from './components/Login'


interface FormData {
  name:string;
  email:string;
  
}
function App() {
  const { toast } = useToast()
  const { register, handleSubmit, watch,getValues, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: ""

    }
  });
  const onSubmit = (data:FormData) =>{
    // api call here...
  }


  return (



    <>
    <Login />
    <LandingPage/>

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Input {...register('name')} placeholder='asmma' />
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
      </InputOTP>

      <Button className='text-xl' variant={'default'} onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
        console.log('alrty button...')
      }} type='reset' >Button</Button>

    </>
  )
}

export default App




const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Tired of Tax Headaches?
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Simplify your tax process and avoid common pitfalls with our expert solution.
          </p>
          <a href="#learn-more" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100">
            Learn More
          </a>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section id="learn-more" className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Common Tax Problems</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Missing deductions that can save you money</li>
              <li>Confusing tax codes and regulations</li>
              <li>Filing mistakes leading to penalties</li>
              <li>Time-consuming paperwork</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">How We Solve Them</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Identify all eligible deductions for maximum savings</li>
              <li>Provide clear guidance on tax laws</li>
              <li>Automate and double-check your filings</li>
              <li>Simplify the process with our intuitive platform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-3">Real-Time Calculations</h3>
                <p className="text-gray-600">Instantly see your tax impact with our real-time calculator.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-3">Guided Filing</h3>
                <p className="text-gray-600">Step-by-step assistance to ensure accurate filing.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-3">Comprehensive Reports</h3>
                <p className="text-gray-600">Get detailed reports to understand your tax situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
              <blockquote className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <p className="text-gray-600 italic">"This platform saved me hours during tax season. It's a game-changer!"</p>
                <cite className="block mt-4 text-gray-800 font-semibold">- Alex P.</cite>
              </blockquote>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <blockquote className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <p className="text-gray-600 italic">"No more tax worries. Everything is handled smoothly and professionally."</p>
                <cite className="block mt-4 text-gray-800 font-semibold">- Maria K.</cite>
              </blockquote>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <blockquote className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <p className="text-gray-600 italic">"I got the most deductions I've ever had thanks to this service."</p>
                <cite className="block mt-4 text-gray-800 font-semibold">- John D.</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

