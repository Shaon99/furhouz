# 🚨 Missing APIs - এখনো দরকার

## Quick Summary

আপনার প্রজেক্টে **মোট 4টি API এখনো নেই** কিন্তু code এ ব্যবহার করার জন্য তৈরি আছে:

---

## 1. ❌ POST /api/property-enquiry

**কোথায় দরকার:**
- `app/property/[slug]/property/EnquiryForm.tsx` (Line 51)

**কি করছে এখন:**
```typescript
// TODO: hit your API endpoint
console.log("ENQUIRY_FORM_DATA", data);
alert("Message sent (demo). Replace with real API call.");
```

**কি data পাঠাবে:**
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "message": "string",
  "propertySlug": "string" // optional
}
```

**Response Expected:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

---

## 2. ❌ POST /api/get-request

**কোথায় দরকার:**
- `app/get-request/page.tsx` (Line 43)

**কি করছে এখন:**
```typescript
// TODO: hook up to your API (send email / store DB)
console.log("Enquiry:", values);
alert("Thank you! We received your enquiry.");
```

**কি data পাঠাবে:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string", 
  "message": "string"
}
```

**Response Expected:**
```json
{
  "success": true,
  "message": "Request submitted successfully"
}
```

---

## 3. ❌ GET /api/properties/search

**কোথায় দরকার:**
- `app/property/components/PropertySearch.tsx` (Line 34)

**কি করছে এখন:**
```typescript
console.log({
  propertyId,
  selectedLocation,
  selectedPrice,
});
alert("Search clicked!");
```

**Query Parameters:**
```
?propertyId=string
&location=string
&priceMin=number
&priceMax=number
&type=string
&page=number
&limit=number
```

**Response Expected:**
```json
{
  "data": [
    {
      // PropertyApiItem objects
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 10,
    "total": 100
  }
}
```

**Note:** এই API `/api/properties?page={page}` এর সাথে merge করা যেতে পারে query parameters দিয়ে।

---

## 4. ⚠️ POST /api/contact

**কোথায় দরকার:**
- `app/contact/components/contact/ContactForm.tsx` (Line 82)

**কি করছে এখন:**
- Next.js API route (`/api/contact`) call করছে
- কিন্তু backend API endpoint নেই

**কি data পাঠাবে:**
```json
{
  "variant": "string", // Form variant/title
  // ... other dynamic fields based on variant
}
```

**Response Expected:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Note:** Next.js API route আছে (`/api/contact`) কিন্তু backend এ implement করতে হবে অথবা Next.js route থেকে backend API call করতে হবে।

---

## 📊 Priority Order

### 🔴 High Priority (জরুরী):
1. **POST /api/property-enquiry** - Property page এ enquiry form কাজ করার জন্য
2. **POST /api/get-request** - Get request page কাজ করার জন্য
3. **GET /api/properties/search** - Property search functionality এর জন্য

### 🟡 Medium Priority:
4. **POST /api/contact** - Backend integration (যদি Next.js route থেকে backend call করতে হয়)

---

## 💡 Implementation Suggestions

### Option 1: Separate Endpoints
প্রতিটি form এর জন্য আলাদা API endpoint:
- `/api/property-enquiry`
- `/api/get-request`
- `/api/contact`

### Option 2: Unified Endpoint
একটি unified endpoint সব form submission এর জন্য:
- `/api/submit-form`
- Request body এ `formType` field দিয়ে identify করা

### Option 3: Extend Existing API
Property search এর জন্য `/api/properties` API extend করা query parameters দিয়ে:
- `/api/properties?location=...&priceMin=...&priceMax=...`

---

## 🔧 Code Changes Needed

### 1. Property Enquiry Form
**File:** `app/property/[slug]/property/EnquiryForm.tsx`

```typescript
// Replace line 50-53 with:
const onSubmit = async (data: FormValues) => {
  try {
    const response = await apiFetch('/api/property-enquiry', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        propertySlug: slug // if available
      })
    });
    toast.success("Message sent successfully!");
    form.reset();
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
  }
};
```

### 2. Get Request Form
**File:** `app/get-request/page.tsx`

```typescript
// Replace line 42-46 with:
async function onSubmit(values: FormValues) {
  try {
    await apiFetch('/api/get-request', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    form.reset();
    toast.success("Thank you! We received your enquiry.");
  } catch (error) {
    toast.error("Failed to submit. Please try again.");
  }
}
```

### 3. Property Search
**File:** `app/property/components/PropertySearch.tsx`

```typescript
// Replace line 34-40 with:
const handleSearch = async () => {
  try {
    const params = new URLSearchParams();
    if (propertyId) params.append('propertyId', propertyId);
    if (selectedLocation) params.append('location', selectedLocation);
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-');
      params.append('priceMin', min);
      params.append('priceMax', max);
    }
    
    const response = await apiFetch(`/api/properties/search?${params}`);
    // Handle search results
  } catch (error) {
    toast.error("Search failed. Please try again.");
  }
};
```

---

## ✅ Next Steps

1. Backend team কে এই API endpoints implement করতে বলুন
2. API response format confirm করুন
3. Error handling add করুন
4. Loading states add করুন
5. Success/Error messages show করুন (toast notifications)

