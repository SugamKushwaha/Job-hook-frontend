import React from 'react'
import { companyData } from '../data/Data'

const About = () => {
  const company = companyData

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map((key, index) =>
        key !== "name" && (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold capitalize">{key}</div>

            {key !== "website" && (
              <div className="text-sm text-zinc-300 text-justify">
                {key === "specialties"
                  ? company[key].map((item, i) => (
                      <span key={i}>&bull; {item} </span>
                    ))
                  : company[key]}
              </div>
            )}

            {key === "website" && (
              <a
                href={company[key]}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-amber-400 text-justify"
              >
                {company[key]}
              </a>
            )}
          </div>
        )
      )}
    </div>
  )
}

export default About