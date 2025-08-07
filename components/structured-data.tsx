interface StructuredDataProps {
  type: "organization" | "doctors" | "services"
}

export function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "#",
          "@type": "PhysioTherapyClinic",
          name: "Korper Heil",
          description:
            "Leading physiotherapy clinic offering expert rehabilitation services, sports injury treatment, and wellness programs.",
          url: "https:/korperheil.com",
          logo: "https://korperheil.com/logo.png",  //is to be made
          image: "https://korperheil.com/clinic-image.jpg", //is to be made
          telephone: "+91 9910772756",
          email: "korper.heil@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C-31, 2nd Floor, Sector 15, RDC",
            addressLocality: "Raj Nagar",
            addressRegion: "Ghaziabad",
            postalCode: "201002",
            addressCountry: "Uttar Pradesh",
          },
          openingHours: ["Mo-Su 09:00-21:30"],
          medicalSpecialty: ["Physical Therapy", "Sports Medicine", "Rehabilitation Medicine", "Pain Management"],
        }

      case "doctors":
        return {
          "@context": "#",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Person",
              name: "Dr. Shalini",
              jobTitle: "BPT, MPT(Neuro Physiotherapy), Physiotherapy, MIAP, DCPT",
              worksFor: {
                "@type": "PhysioTherapyClinic",
                name: "Korper Heil",
              },
              hasCredential: "BPT, MPT(Neuro Physiotherapy), Physiotherapy, MIAP, DCPT",
              knowsAbout: "Stroke recovery, spinal cord injuries, movement disorders, Women Healthcare - Ante-natal & Post Natal care, Post Natal weight management Yoga",
              yearsOfExperience: "9+",
            },
            {
              "@type": "Person",
              name: "Dr. Akash Jainth (PT)",
              jobTitle: "BPT (IPH), MPT (Musculoskeletal), MIAP, DCPT",
              worksFor: {
                "@type": "PhysioTherapyClinic",
                name: "Korper Heil",
              },
              hasCredential: "BPT (IPH), MPT (Musculoskeletal), MIAP, DCPT",
              knowsAbout: "Chiropractic care, Spine-related conditions, Sports injuries & orthopaedic rehabilitation, Postural correction & management, Pilates instruction, Ergonomics, Treatment of professional athletes, Manual Therapy",
              yearsOfExperience: "9+",
            },
          ],
        }

      case "services":
        return {
          "@context": "#",  //https://schema.org
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "PhysioTherapyClinic",
              name: "Sports Injury Rehabilitation",
              description:
                "Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries.",
              procedureType: "Physical Therapy",
              bodyLocation: "Musculoskeletal System",
            },
            {
              "@type": "PhysioTherapyClinic",
              name: "Orthopedic Physical Therapy",
              description:
                "Post-surgical rehabilitation and treatment for musculoskeletal conditions and joint problems.",
              procedureType: "Physical Therapy",
              bodyLocation: "Joints and Bones",
            },
            {
              "@type": "PhysioTherapyClinic",
              name: "Neurological Rehabilitation",
              description:
                "Specialized care for stroke recovery, spinal cord injuries, and neurological movement disorders.",
              procedureType: "Physical Therapy",
              bodyLocation: "Nervous System",
            },
          ],
        }

      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
