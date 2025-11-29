# API Documentation - FurHouz Project

## Base URL
সব API calls `NEXT_PUBLIC_BASE_URL` environment variable থেকে base URL ব্যবহার করে।  
API fetch function: `lib/apiFetch.ts`

---

## 📋 API List (মোট 16টি API)

### 1. **GET /api/properties?page={page}**
**Query Hook:** `usePropertiesQuery(page: number)`  
**File:** `hooks/queries/usePropertiesQuery.ts`  
**Type:** `PropertiesApiResponse`  
**ব্যবহার:**
- `components/card/RelatedAppartment.tsx` - Related apartments দেখানোর জন্য
- `app/property/components/RecentProperties.tsx` - Recent properties list এবং infinite scroll

---

### 2. **GET /api/property/{slug}**
**Query Hook:** `usePropertyBySlugQuery(slug: string)`  
**File:** `hooks/queries/usePropertyBySlugQuery.ts`  
**Type:** `PropertyApiResponse`  
**ব্যবহার:**
- `app/property/[slug]/page.tsx` - Individual property details page

---

### 3. **GET /api/location/{slug}**
**Query Hook:** `useLocationDetailQuery(slug: string, page: number, limit: number)`  
**File:** `hooks/queries/useLocationDetailQuery.ts`  
**Type:** `LocationDetailApiResponse`  
**ব্যবহার:**
- `app/area/[slug]/page.tsx` - Location/Area detail page

---

### 4. **GET /api/get-location**
**Query Hook:** `useLocationQuery()`  
**File:** `hooks/queries/useLocationQuery.ts`  
**Type:** `LocationApiResponse`  
**ব্যবহার:**
- `components/home/OurLocations.tsx` - Homepage এ locations list
- `app/property/components/PropertySearch.tsx` - Property search form এ location dropdown
- `components/home/Search.tsx` - Homepage search component

---

### 5. **GET /api/get-homepage-content**
**Query Hook:** `useHomepageContentQuery()`  
**File:** `hooks/queries/useHomepageContentQuery.ts`  
**Type:** `HomepageContentApiResponse`  
**ব্যবহার:**
- `components/home/PrimeLocations.tsx` - Prime locations section
- `components/home/SpecialFacilities.tsx` - Special facilities section
- `components/home/FurnishedAppartment.tsx` - Furnished apartment section

---

### 6. **GET /api/get-homepage-section**
**Query Hook:** `useHomepageSectionQuery()`  
**File:** `hooks/queries/useHomepageSectionQuery.ts`  
**Type:** `HomepageSectionApiResponse`  
**ব্যবহার:**
- `components/home/HomepageSections.tsx` - Homepage sections display

---

### 7. **GET /api/get-banner**
**Query Hook:** `useBannerQuery()`  
**File:** `hooks/queries/useBannerQuery.ts`  
**Type:** `BannerApiResponse`  
**ব্যবহার:**
- `components/global/Header.tsx` - Header component এ banner display

---

### 8. **GET /api/settings**
**Query Hook:** `useSettingsQuery()`  
**File:** `hooks/queries/useSettingsQuery.ts`  
**Type:** `SettingsApiResponse`  
**ব্যবহার:**
- `components/home/Topbar.tsx` - Topbar component (contact info, social links)
- `components/global/Footer.tsx` - Footer component
- `app/property/[slug]/property/EnquiryForm.tsx` - Property enquiry form
- `app/get-request/page.tsx` - Get request page
- `app/contact/components/ContactOptions.tsx` - Contact options component

---

### 9. **GET /api/get-about-us**
**Query Hook:** `useAboutUsQuery()`  
**File:** `hooks/queries/useAboutUsQuery.ts`  
**Type:** `AboutUsApiResponse`  
**ব্যবহার:**
- `app/about-us/page.tsx` - About Us page

---

### 10. **GET /api/get-page?slug={slug}**
**Query Hook:** `usePageQuery(slug: string)`  
**File:** `hooks/queries/usePageQuery.ts`  
**Type:** `PageApiResponse`  
**ব্যবহার:**
- `app/terms-conditions/page.tsx` - Terms & Conditions page (slug: 'furhouz-website-terms')

---

### 11. **GET /api/get-faq**
**Query Hook:** `useFaqQuery()`  
**File:** `hooks/queries/useFaqQuery.ts`  
**Type:** `FAQApiResponse`  
**ব্যবহার:**
- `app/faq/components/FaqLongList.tsx` - FAQ list component

---

### 12. **GET /api/get-corporate-benefit**
**Query Hook:** `useCorporateBenefitQuery()`  
**File:** `hooks/queries/useCorporateBenefitQuery.ts`  
**Type:** `CorporateBenefitApiResponse`  
**ব্যবহার:**
- `app/corporates/components/CorporateBenefits.tsx` - Corporate benefits section

---

### 13. **GET /api/property-owner-details**
**Query Hook:** `usePropertyOwnerDetailsQuery()`  
**File:** `hooks/queries/usePropertyOwnerDetailsQuery.ts`  
**Type:** `PropertyOwnerDetailsApiResponse`  
**ব্যবহার:**
- `app/property-owner/components/StepsTimeline.tsx` - Steps timeline component
- `app/property-owner/components/QASection.tsx` - Q&A section
- `app/property-owner/components/PropertyBanner.tsx` - Property owner banner
- `app/property-owner/components/BenefitsSection.tsx` - Benefits section
- `app/property-owner/components/PropertyHero.tsx` - Property owner hero section

---

### 14. **GET /api/get-testimonial**
**Query Hook:** `useTestimonialQuery()`  
**File:** `hooks/queries/useTestimonialQuery.ts`  
**Type:** `TestimonialApiResponse`  
**ব্যবহার:**
- `components/home/FurHouzTestimonials.tsx` - Testimonials section on homepage

---

### 15. **GET /api/get-why-choose**
**Query Hook:** `useWhyChooseQuery()`  
**File:** `hooks/queries/useWhyChooseQuery.ts`  
**Type:** `WhyChooseApiResponse`  
**ব্যবহার:**
- `components/home/WhyChoose.tsx` - Why Choose section on homepage

---

### 16. **GET /api/get-type**
**Query Hook:** `usePropertyTypeQuery()`  
**File:** `hooks/queries/usePropertyTypeQuery.ts`  
**Type:** `PropertyTypeApiResponse`  
**ব্যবহার:**
- ❌ **কোনো component এ এখনো ব্যবহার হয়নি** (হয়তো property search/filter এ ব্যবহার হবে)

---

## 📊 Summary

### API Usage Statistics:
- **মোট API:** 16টি
- **ব্যবহৃত API:** 15টি
- **অব্যবহৃত API:** 1টি (`/api/get-type`)

### Most Used APIs:
1. **`/api/settings`** - 5টি component এ ব্যবহার
2. **`/api/get-location`** - 3টি component এ ব্যবহার
3. **`/api/get-homepage-content`** - 3টি component এ ব্যবহার
4. **`/api/property-owner-details`** - 5টি component এ ব্যবহার

### API Categories:
- **Property Related:** `/api/properties`, `/api/property/{slug}`, `/api/get-type`
- **Location Related:** `/api/get-location`, `/api/location/{slug}`
- **Content Related:** `/api/get-homepage-content`, `/api/get-homepage-section`, `/api/get-page`, `/api/get-about-us`
- **UI Components:** `/api/get-banner`, `/api/settings`
- **Features:** `/api/get-faq`, `/api/get-corporate-benefit`, `/api/property-owner-details`, `/api/get-testimonial`, `/api/get-why-choose`

---

## 🔧 Helper Functions

### `lib/apiFetch.ts`
- Client-side API fetch function
- Automatic token handling from localStorage
- Error handling with HttpError class
- Base URL from `NEXT_PUBLIC_BASE_URL`

### `lib/apiFetchServer.ts`
- Server-side API fetch function
- For use in Next.js server components

### `lib/propertyMapper.ts`
- Maps API property data to application Property type
- Used in: `useLocationDetailQuery`, `RelatedAppartment`, `RecentProperties`, `PropertyBySlug`

---

## 📝 Notes

1. সব API calls React Query (`@tanstack/react-query`) ব্যবহার করে
2. Authentication token localStorage থেকে automatically add হয় (যদি থাকে)
3. Base URL environment variable থেকে নেওয়া হয়
4. Most APIs have caching enabled (staleTime configured)
5. `usePropertyTypeQuery` এখনো কোনো component এ ব্যবহার হয়নি - সম্ভবত property filtering/search এ ব্যবহার হবে

---

## ⚠️ Missing APIs (যে API গুলো এখনো নেই কিন্তু দরকার)

### 1. **POST /api/property-enquiry** ❌
**Status:** এখনো নেই (TODO comment আছে)  
**Location:** `app/property/[slug]/property/EnquiryForm.tsx`  
**Purpose:** Property enquiry form submit করার জন্য  
**Current State:** 
- Line 51-53: `// TODO: hit your API endpoint`
- এখন শুধু `console.log` এবং `alert` আছে
- Form data: `{ name, email, phone, message, propertySlug? }`

**Required Fields:**
```typescript
{
  name: string;
  email: string;
  phone: string;
  message: string;
  propertySlug?: string; // Optional - যদি property page থেকে submit হয়
}
```

---

### 2. **POST /api/get-request** ❌
**Status:** এখনো নেই (TODO comment আছে)  
**Location:** `app/get-request/page.tsx`  
**Purpose:** Get Request form submit করার জন্য  
**Current State:**
- Line 43: `// TODO: hook up to your API (send email / store DB)`
- এখন শুধু `console.log` এবং `alert` আছে
- Form data: `{ name, email, phone, message }`

**Required Fields:**
```typescript
{
  name: string;
  email: string;
  phone: string;
  message: string;
}
```

---

### 3. **GET /api/properties/search** ❌
**Status:** এখনো নেই  
**Location:** `app/property/components/PropertySearch.tsx`  
**Purpose:** Property search/filter করার জন্য  
**Current State:**
- Line 34-40: `handleSearch` function শুধু `console.log` করে
- Search parameters: `propertyId`, `selectedLocation`, `selectedPrice`

**Required Query Parameters:**
```typescript
{
  propertyId?: string;
  location?: string; // Location name or slug
  priceMin?: number;
  priceMax?: number;
  type?: string; // Property type (use /api/get-type)
  page?: number;
  limit?: number;
}
```

**Note:** এই API `/api/properties?page={page}` এর সাথে integrate করা যেতে পারে query parameters দিয়ে

---

### 4. **POST /api/contact** ⚠️
**Status:** Next.js API route আছে কিন্তু Backend API নেই  
**Location:** `app/contact/components/contact/ContactForm.tsx`  
**Purpose:** Contact form submit করার জন্য  
**Current State:**
- Line 82-86: Next.js API route (`/api/contact`) call করে
- কিন্তু backend API endpoint নেই
- Form data: `{ variant: string, ...otherFields }`

**Required:** Backend এ এই endpoint implement করতে হবে অথবা Next.js API route থেকে backend API call করতে হবে

---

### 5. **GET /api/properties/filter** (Optional) 💡
**Status:** এখনো নেই  
**Purpose:** Advanced property filtering  
**Suggested Query Parameters:**
```typescript
{
  location?: string;
  type?: string;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  baths?: number;
  areaMin?: number;
  areaMax?: number;
  furnished?: boolean;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'area' | 'date';
  sortOrder?: 'asc' | 'desc';
}
```

**Note:** এই API `/api/properties` এর সাথে merge করা যেতে পারে query parameters দিয়ে

---

## 🎯 Priority List (কোন API আগে দরকার)

### High Priority (জরুরী):
1. **POST /api/property-enquiry** - Property enquiry form কাজ করার জন্য
2. **POST /api/get-request** - Get request form কাজ করার জন্য
3. **GET /api/properties/search** - Property search functionality এর জন্য

### Medium Priority:
4. **POST /api/contact** - Backend integration (যদি Next.js API route থেকে backend call করতে হয়)

### Low Priority (Optional):
5. **GET /api/properties/filter** - Advanced filtering (যদি search API দিয়ে cover না হয়)

---

## 📋 Implementation Checklist

- [ ] **POST /api/property-enquiry** - Property enquiry form API
- [ ] **POST /api/get-request** - Get request form API  
- [ ] **GET /api/properties/search** - Property search API
- [ ] **POST /api/contact** - Backend contact API (যদি দরকার হয়)
- [ ] **usePropertyTypeQuery** - Property search/filter এ integrate করা

