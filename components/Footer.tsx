// components/Footer.tsx
'use client';

import ContactIcons from "./ContactIcons"

export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
              <p>
                &copy; {new Date().getFullYear()} Kartik Chaudhary. All rights
                reserved.
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-4 sm:mt-0">
              <ContactIcons />
            </div>
          </div>
        </div>
      </footer>
    )
  }
