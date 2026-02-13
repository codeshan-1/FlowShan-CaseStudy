<div align="center">

# 🚀 09 - Deployment & DevOps

![Deployment](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Vercel+Pipeline;PostgreSQL+Neon;Serverless+Functions)

> **"Ship small, ship often. From localhost to global edge in 2 minutes."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Testing-00E5FF?style=for-the-badge)](08-testing-quality.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Impact-4a45ea?style=for-the-badge)](10-results-impact.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🌐 Infrastructure Stack

| Component | Technology | Why? |
|:---|:---|:---|
| **Frontend/API** | **Vercel** | Zero-config deployments for Next.js with global CDN. |
| **Database** | **Neon (PostgreSQL)** | Serverless Postgres that sleeps when idle (saves cost) and wakes in 300ms. |
| **Object Storage** | **Cloudinary** | Automatic image optimization for user avatars. |
| **Auth** | **Google OAuth** | Managed identity provider for security. |

<br/>

## 🛠️ The CI/CD Pipeline

Our deployment strategy is fully automated via Git hooks on Vercel.

1.  **Commit Pushed** to `main` branch.
2.  **Vercel Build Begins:**
    *   Installs dependencies (`pnpm install`).
    *   Generates Prisma Client.
    *   Runs Type Check (`tsc --noEmit`).
    *   Builds Next.js App (`next build`).
3.  **Migration Check:** If schema changed, `prisma migrate deploy` runs automatically using specific build commands.
4.  **Deployment:** Code is distributed to Edge locations worldwide.

<br/>

## 🩺 Health Checks & Monitoring

We include specific endpoints to verify system health in production:
*   **Mailer Status:** `src/app/api/system/mailer-status/route.ts` - Checks SMTP connection.
*   **Database Ping:** The root `page.tsx` pre-fetches user data, failing gracefully (and alerting) if the DB is unreachable.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-08_Testing-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](08-testing-quality.md)
[![Next](https://img.shields.io/badge/Next-10_Impact-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](10-results-impact.md)

</div>