'use client'
import React from 'react'
import Image from 'next/image'
import TextType from '@/components/TextType'
import ProfileCard from '@/components/ProfileCard'

interface TeamMember {
  name: string
  position: string
  image: string
  message: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Manzoor Ahmed Panhwar ASC",
    position: "President",
    image: "/team/president.jpg",
    message: "Leading our legal community with dedication and commitment to justice."
  },
  {
    name: "Abdul Latif Soomro",
    position: "Vice President",
    image: "/team/vice-president.jpg",
    message: "Supporting our members and upholding the highest standards of legal practice."
  },
  {
    name: "M. Nadeem Qureshi",
    position: "General Secretary",
    image: "/team/general-secretary.jpg",
    message: "Coordinating all administrative matters and member services efficiently."
  },
  {
    name: "Muzaffar H. Brohi",
    position: "Joint Secretary",
    image: "/team/joint-secretary.jpg",
    message: "Assisting in all secretarial duties and member communications."
  },
  {
    name: "Lalchand Maheshwari",
    position: "Library Secretary",
    image: "/team/library-secretary.jpg",
    message: "Managing our extensive legal library and resources for member benefit."
  },
  {
    name: "Rehan Khan Pathan",
    position: "Treasurer",
    image: "/team/treasurer.jpg",
    message: "Ensuring financial transparency and proper management of bar funds."
  },
  {
    name: "Qazi Junaid Ahmed",
    position: "MMC",
    image: "/team/mmc1.jpg",
    message: "Managing committee member dedicated to bar council development."
  },
  {
    name: "Mir Muhammad (Babu Shah)",
    position: "MMC",
    image: "/team/mmc2.jpg",
    message: "Managing committee member working for member welfare and rights."
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section with Background Image */}
      <div className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url(/team-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/65 to-blue-900/65"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">
            The Bar Council Team
          </h1>
          <p className="text-xl text-center text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Meet our dedicated team of legal professionals committed to serving the legal community
          </p>
        </div>
      </div>

      {/* President Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#2563eb] to-blue-700 rounded-2xl shadow-2xl overflow-hidden mb-16 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-96 lg:w-[450px] flex-shrink-0">
              <ProfileCard
                name={teamMembers[0].name}
                title={teamMembers[0].position}
                avatarUrl={teamMembers[0].image}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-3">{teamMembers[0].name}</h2>
              <span className="inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-gray-900 px-8 py-3 rounded-lg text-lg font-extrabold shadow-2xl border-2 border-amber-400 mb-6 self-center md:self-start uppercase tracking-wide">
                {teamMembers[0].position}
              </span>
              <div className="text-white/95 text-xl leading-relaxed min-h-[120px]">
                <TextType
                  text={[
                    "The District Bar Association is devoted to upholding justice, safeguarding rights, and ensuring equal access to law. Lawyers are not only advocates for their clients but also guardians of justice and democracy. Together, we strive to strengthen the legal system and serve society with integrity.",
                    "ضلعي بار ايسوسيئيشن انصاف جي قيام، حقن جي حفاظت ۽ قانون تائين برابر رسائي لاءِ پرعزم آهي. وڪيل نه رڳو پنهنجن مؤڪلن جا وڪيل آهن، پر انصاف ۽ جمهوريت جا نگهبان به آهن. گڏجي، اسين سماج جي خدمت ايمانداري ۽ هم آهنگي سان ڪيون ٿا."
                  ]}
                  typingSpeed={30}
                  pauseDuration={10000}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members Grid */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Executive Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-80 bg-gradient-to-br from-[#2563eb] to-blue-700 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center">
                  {/* Photo Frame */}
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover scale-110"
                      style={{
                        objectPosition: index === 0 ? 'center 10%' : index === 1 ? 'center 10%' : index === 3 ? 'center 10%' : index === 4 ? 'center 10%' : 'center 45%'
                      }}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <svg class="w-24 h-24 text-gray-400 mx-auto my-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                        `;
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{member.name}</h3>
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-[#040F35] px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {member.position}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 text-center leading-relaxed">
                  {member.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you.
          </p>
          <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
