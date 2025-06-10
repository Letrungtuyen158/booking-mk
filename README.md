# Booking MK - Tour Du Lịch Chuyên Nghiệp

Hệ thống booking tour du lịch hiện đại được xây dựng bằng Next.js và Tailwind CSS.

## Tính năng

- 🌍 **Đa dạng tour du lịch**: Khám phá các gói tour hấp dẫn
- 🏨 **Dịch vụ hostel**: Tìm kiếm và đặt phòng hostel
- 📱 **Giao diện responsive**: Tối ưu cho mọi thiết bị
- 🎯 **Tìm kiếm thông minh**: Lọc tour theo sở thích
- 👥 **Đội ngũ chuyên nghiệp**: Giới thiệu team và dịch vụ
- 📝 **Blog du lịch**: Chia sẻ kinh nghiệm và tips
- 💬 **Hỗ trợ khách hàng**: Liên hệ và FAQ

## Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod
- **Date Picker**: React Day Picker
- **Icons**: Lucide React
- **Notifications**: Sonner

## Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js 18+
- npm hoặc yarn

### Bước 1: Cài đặt dependencies

```bash
cd booking-mk
npm install
```

### Bước 2: Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3001](http://localhost:3001) để xem kết quả.

### Bước 3: Build cho production

```bash
npm run build
npm start
```

## Cấu trúc dự án

```
booking-mk/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # Trang giới thiệu
│   │   ├── tours/          # Danh sách tour
│   │   ├── tour/[id]/      # Chi tiết tour
│   │   ├── hostel/         # Dịch vụ hostel
│   │   ├── destinations/   # Điểm đến
│   │   ├── blog/           # Blog du lịch
│   │   ├── contact/        # Liên hệ
│   │   ├── faqs/           # Câu hỏi thường gặp
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Trang chủ
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── ui/            # UI components
│   │   ├── Header.tsx     # Header component
│   │   ├── Footer.tsx     # Footer component
│   │   └── ...            # Các components khác
│   ├── lib/               # Utilities
│   ├── hooks/             # Custom hooks
│   ├── types/             # TypeScript types
│   └── services/          # API services
├── public/                # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build ứng dụng cho production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint
- `npm run type-check` - Kiểm tra TypeScript

## Deployment

Dự án có thể được deploy lên:

- **Vercel** (khuyến nghị cho Next.js)
- **Netlify**
- **AWS**
- **DigitalOcean**

### Deploy với Vercel:

```bash
npm install -g vercel
vercel
```

## Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## Liên hệ

- **Email**: info@booking-mk.com
- **Website**: https://booking-mk.vercel.app
- **Support**: 24/7 customer service

---

Được phát triển với ❤️ bởi Booking MK Team
