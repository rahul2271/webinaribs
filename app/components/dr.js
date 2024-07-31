import Image from 'next/image'
import Link from 'next/link';

export default function Doctor() {
  return (
    <div id='doctor' className="mt-[100px] relative shadow-lg p-[30px] bg-cover bg-center bg-custom-pattern bg-custom-pattern-h-[500px] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative max-w-7xl w-full   rounded-lg  flex flex-col md:flex-row">
        <div>
        <h2 className="text-4xl font-light text-[#47126B]">Webinar Speaker</h2>
        <div className='mt-[5px] mx-auto w-max place-content-center'><hr style={{ width: '150px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        </div>
        <div className="flex-shrink-0">

          <Image src="/d2.png" alt="Dr. Suhas Sakhare" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
          <div>
            
            <h3 className="mt-4 text-6xl font-bold text-[#F14A04]">Dr. Suhas Sakhare</h3>
            <p className="text-sm text-[#47126B]">(MD, PhD Ayurveda & Panchakarma Expert)</p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-[#F14A04]">Experienced & Passionate:</h4>
            <p className="text-sm font-semibold  text-gray-700">
              AYUSH Certified, MD, PhD, DYT Ayurvedic Doctor with over a decade of experience in transforming lives through Authentic Ayurveda.
              A Scholar who completed many case studies, published research papers in International Journals.
            </p>
            <h4 className="mt-4 text-lg font-semibold text-[#F14A04]">Personalized Approach:</h4>
            <p className=" font-semibold text-sm text-gray-700">
              Working day & night on integration of age-old Ayurvedic Treatment Methodologies with Modern Day Scientific Researches. Available for both Online/Offline Consultations to provide you with a Holistic Treatment Plan, which includes - Medicines, Panchakarma, Diet and Lifestyle Guidance.
            </p>
            <h4 className="mt-4 text-lg font-semibold text-[#F14A04]">Expertise in:</h4>
            <ul className=" font-semibold text-sm text-gray-700 list-disc list-inside">
              <li>Digestive Health (IBS, IBD, Ulcerative Colitis, CKD, Hyperacidity, GERD)</li>
              <li>Skin Disorders (Psoriasis, Eczema, Vitiligo etc.)</li>
              <li>Pain Management</li>
              <li>Male & Female Infertility</li>
              <li>Ayurvedic & Panchakarma Therapies</li>
            </ul>
          </div>
          <div className="mt-6 text-center md:text-left">
            <Link href="#forem" className="inline-block bg-[#F14A04] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#F14A04]/50">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
