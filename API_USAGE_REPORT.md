# API Usage Report - FurHouz Project

## ✅ **বর্তমানে ব্যবহৃত API গুলো (Currently Used APIs)**

### 1. **GET `/api/get-banner`**
- **Hook:** `useBannerQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/global/Header.tsx` - Header এ banner data দেখানোর জন্য

---

### 2. **GET `/api/get-location`**
- **Hook:** `useLocationQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/OurLocations.tsx` - Homepage এ locations দেখানোর জন্য
  - `components/home/Search.tsx` - Search component এ location dropdown
  - `app/property/components/PropertySearch.tsx` - Property search এ location filter

---

### 3. **GET `/api/get-homepage-content`**
- **Hook:** `useHomepageContentQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/FurnishedAppartment.tsx` - Furnished apartment section
  - `components/home/SpecialFacilities.tsx` - Special facilities section

---

### 4. **GET `/api/get-homepage-section`**
- **Hook:** `useHomepageSectionQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/HomepageSections.tsx` - Homepage sections dynamic content

---

### 5. **GET `/api/get-testimonial`**
- **Hook:** `useTestimonialQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/FurHouzTestimonials.tsx` - Testimonials slider

---

### 6. **GET `/api/get-why-choose`**
- **Hook:** `useWhyChooseQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/WhyChoose.tsx` - Why choose us section

---

### 7. **GET `/api/get-about-us`**
- **Hook:** `useAboutUsQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/about-us/page.tsx` - About us page content

---

### 8. **GET `/api/get-faq`**
- **Hook:** `useFaqQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/faq/components/FaqLongList.tsx` - FAQ list page

---

### 9. **GET `/api/get-page`**
- **Hook:** `usePageQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/terms-conditions/page.tsx` - Terms & conditions page (slug: 'terms-and-conditions')

---

### 10. **GET `/api/properties?page={page}`**
- **Hook:** `usePropertiesQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/property/components/RecentProperties.tsx` - Property listing page
  - `components/card/RelatedAppartment.tsx` - Related properties

---

### 11. **GET `/api/property/{slug}`**
- **Hook:** `usePropertyBySlugQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/property/[slug]/page.tsx` - Individual property details page

---

### 12. **GET `/api/property-owner-details`**
- **Hook:** `usePropertyOwnerDetailsQuery`
- **ব্যবহার করা হয়েছে:**
  - `app/property-owner/components/PropertyHero.tsx` - Hero section
  - `app/property-owner/components/BenefitsSection.tsx` - Benefits section
  - `app/property-owner/components/StepsTimeline.tsx` - Steps timeline
  - `app/property-owner/components/PropertyBanner.tsx` - Banner section
  - `app/property-owner/components/QASection.tsx` - Q&A section

---

### 13. **GET `/api/settings`**
- **Hook:** `useSettingsQuery`
- **ব্যবহার করা হয়েছে:**
  - `components/home/Topbar.tsx` - Topbar (logo, contact info)
  - `components/global/Footer.tsx` - Footer (site info)
  - `app/property/[slug]/property/EnquiryForm.tsx` - Enquiry form (WhatsApp number)
  - `app/get-request/page.tsx` - Get request page (logo)
  - `app/contact/components/ContactOptions.tsx` - Contact options

---

### 14. **GET `/api/get-type`**
- **Hook:** `usePropertyTypeQuery`
- **ব্যবহার করা হয়েছে:**
  - **কোনো component এ এখনো ব্যবহার করা হয়নি!** (Hook তৈরি আছে কিন্তু কোথাও use করা হয়নি)

---

### 15. **POST `/api/contact`**
- **Direct fetch (no hook)**
- **ব্যবহার করা হয়েছে:**
  - `app/contact/components/contact/ContactForm.tsx` - Contact form submission

---

## ❌ **Missing APIs - যা এখনো implement করা হয়নি (Not Yet Implemented)**

### 1. **POST `/api/enquiry` বা `/api/property-enquiry`**
- **দরকার কোথায়:**
  - `app/property/[slug]/property/EnquiryForm.tsx` - Property enquiry form (line 50-54 এ TODO আছে)
  - `app/get-request/page.tsx` - Get request form (line 42-46 এ TODO আছে)
- **কি করতে হবে:**
  - Property enquiry form submit করার জন্য API endpoint
  - Form data: name, email, phone, message, property_id/slug

---

### 2. **GET `/api/properties` with filters (Advanced Search)**
- **দরকার কোথায়:**
  - `app/property/components/PropertySearch.tsx` - Search functionality (line 34-41 এ alert আছে, API call নেই)
- **কি করতে হবে:**
  - Property search with filters:
    - Property ID
    - Location (location_id)
    - Price range (min_price, max_price)
    - Property type
  - Currently search button শুধু alert দেখায়, actual API call নেই

---

### 3. **GET `/api/area/{slug}` বা `/api/area/{slug}/properties`**
- **দরকার কোথায়:**
  - `app/area/[slug]/page.tsx` - Area page এ properties দেখানোর জন্য
  - `lib/hooks/useAreaProperties.ts` - Currently local data use করছে (`getAreaPropertiesPaginated`)
- **কি করতে হবে:**
  - Area based properties fetch করার জন্য API
  - Pagination support দরকার

---

### 4. **GET `/api/area-guide/{slug}`**
- **দরকার কোথায়:**
  - `app/area-guide/[slug]/page.tsx` - Area guide details page (file আছে কিনা check করতে হবে)
- **কি করতে হবে:**
  - Area guide content fetch করার জন্য

---

### 5. **GET `/api/corporates` বা `/api/corporate-content`**
- **দরকার কোথায়:**
  - `app/corporates/page.tsx` - Corporate page
  - `app/corporates/components/CorporateHero.tsx`
  - `app/corporates/components/CorporateBenefits.tsx`
  - `app/corporates/components/CorporateCustomerSlider.tsx`
- **কি করতে হবে:**
  - Corporate page এর content fetch করার জন্য

---

### 6. **GET `/api/contact` (GET request for contact info)**
- **দরকার কোথায়:**
  - `app/contact/page.tsx` - Contact page
  - `app/contact/components/ContactHero.tsx`
- **কি করতে হবে:**
  - Contact page এর content fetch করার জন্য (যদি dynamic content থাকে)

---

## 📋 **Summary - API Status**

### ✅ **Implemented & Working (15 APIs)**
1. `/api/get-banner`
2. `/api/get-location`
3. `/api/get-homepage-content`
4. `/api/get-homepage-section`
5. `/api/get-testimonial`
6. `/api/get-why-choose`
7. `/api/get-about-us`
8. `/api/get-faq`
9. `/api/get-page`
10. `/api/properties?page={page}`
11. `/api/property/{slug}`
12. `/api/property-owner-details`
13. `/api/settings`
14. `/api/get-type` (Hook আছে কিন্তু use করা হয়নি)
15. `/api/contact` (POST - working)

### ❌ **Missing/Needed APIs (6 APIs)**
1. **POST `/api/enquiry`** - Property enquiry form
2. **GET `/api/properties` with filters** - Advanced property search
3. **GET `/api/area/{slug}/properties`** - Area based properties
4. **GET `/api/area-guide/{slug}`** - Area guide content
5. **GET `/api/corporates`** - Corporate page content
6. **GET `/api/contact`** - Contact page content (if needed)

---

## 🔍 **Files/Pages যেগুলোতে API দরকার**

### 1. **Property Enquiry Forms**
- `app/property/[slug]/property/EnquiryForm.tsx` - **POST `/api/enquiry` দরকার**
- `app/get-request/page.tsx` - **POST `/api/enquiry` দরকার**

### 2. **Property Search**
- `app/property/components/PropertySearch.tsx` - **GET `/api/properties` with filters দরকার**

### 3. **Area Pages**
- `app/area/[slug]/page.tsx` - **GET `/api/area/{slug}/properties` দরকার**
- `app/area-guide/[slug]/page.tsx` - **GET `/api/area-guide/{slug}` দরকার** (যদি file থাকে)

### 4. **Corporate Page**
- `app/corporates/page.tsx` - **GET `/api/corporates` দরকার**
- Related components:
  - `app/corporates/components/CorporateHero.tsx`
  - `app/corporates/components/CorporateBenefits.tsx`
  - `app/corporates/components/CorporateCustomerSlider.tsx`

### 5. **Contact Page** (যদি dynamic content থাকে)
- `app/contact/page.tsx` - **GET `/api/contact` দরকার**

---

## 📝 **Notes**

1. **`usePropertyTypeQuery`** hook তৈরি আছে কিন্তু কোথাও use করা হয়নি। Property type filter করার জন্য এটি ব্যবহার করা যেতে পারে।

2. **Property Search** (`PropertySearch.tsx`) এ এখনো actual API call নেই, শুধু alert দেখায়।

3. **Area Properties** (`useAreaProperties.ts`) এখন local data use করছে, API integration দরকার।

4. **Enquiry Forms** এ TODO comment আছে, API integration করা হয়নি।

5. **Corporate page** এ কোনো API call নেই, static content আছে কিনা check করতে হবে।

---

## 🎯 **Priority Order for Missing APIs**

1. **High Priority:**
   - POST `/api/enquiry` - User enquiry functionality critical
   - GET `/api/properties` with filters - Search functionality important

2. **Medium Priority:**
   - GET `/api/area/{slug}/properties` - Area page functionality
   - GET `/api/corporates` - Corporate page content

3. **Low Priority:**
   - GET `/api/area-guide/{slug}` - If area guide page exists
   - GET `/api/contact` - If contact page needs dynamic content

