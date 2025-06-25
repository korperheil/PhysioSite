interface StructuredDataProps {
  type: "organization" | "doctors" | "services"
}

export function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "PhysioHeal Clinic",
          description:
            "Leading physiotherapy clinic offering expert rehabilitation services, sports injury treatment, and wellness programs.",
          url: "https://physioheal-clinic.com",
          logo: "https://physioheal-clinic.com/logo.png",
          image: "https://physioheal-clinic.com/og-image.jpg",
          telephone: "+1-234-567-890",
          email: "info@physioheal.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Health Street",
            addressLocality: "Medical District",
            addressRegion: "State",
            postalCode: "12345",
            addressCountry: "US",
          },
          openingHours: ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-17:00"],
          medicalSpecialty: ["Physical Therapy", "Sports Medicine", "Rehabilitation Medicine", "Pain Management"],
        }

      case "doctors":
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Person",
              name: "Dr. Sarah Smith",
              jobTitle: "Physical Therapist",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "PhysioHeal Clinic",
              },
              hasCredential: "DPT, MS, OCS",
              knowsAbout: "Orthopedic & Sports Rehabilitation",
              yearsOfExperience: 12,
            },
            {
              "@type": "Person",
              name: "Dr. Michael Johnson",
              jobTitle: "Physical Therapist",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "PhysioHeal Clinic",
              },
              hasCredential: "DPT, PhD, NCS",
              knowsAbout: "Neurological Rehabilitation",
              yearsOfExperience: 15,
            },
          ],
        }

      case "services":
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "MedicalProcedure",
              name: "Sports Injury Rehabilitation",
              description:
                "Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries.",
              procedureType: "Physical Therapy",
              bodyLocation: "Musculoskeletal System",
            },
            {
              "@type": "MedicalProcedure",
              name: "Orthopedic Physical Therapy",
              description:
                "Post-surgical rehabilitation and treatment for musculoskeletal conditions and joint problems.",
              procedureType: "Physical Therapy",
              bodyLocation: "Joints and Bones",
            },
            {
              "@type": "MedicalProcedure",
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
