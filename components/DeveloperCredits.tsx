'use client'

import { SiteConfig } from '@/config/site.config'

/**
 * Developer Credits Component
 * Shows copyright and developer information
 * Displayed in footer - NOT editable via admin panel
 */
export default function DeveloperCredits() {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            {SiteConfig.copyright.text}
          </div>

          {/* Developer Credits */}
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <span>{SiteConfig.copyright.developedBy}</span>
            {SiteConfig.developer.website && (
              <>
                <span>•</span>
                <a
                  href={SiteConfig.developer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  {SiteConfig.developer.name}
                </a>
              </>
            )}
          </div>

          {/* Branding */}
          <div className="text-sm text-gray-400">
            Powered by {SiteConfig.siteNameShort}
          </div>
        </div>
      </div>
    </div>
  )
}
