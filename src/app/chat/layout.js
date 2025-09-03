
export const  metadata = {
    title: "NebulaChat – Private Chat",
    description: "Join NebulaChat to chat anonymously and privately with users in real-time. No signups, no storage, just ephemeral conversations.",
    keywords: [
      "Anonymous Chat",
      "Private Messaging",
      "Ephemeral Chat",
      "NebulaChat",
      "Real-time Chat",
    ],
    authors: [{ name: "NebulaChat Team", url: "https://nebulachat.onrender.com" }],
    creator: "NebulaChat Team",
    publisher: "NebulaChat",
    openGraph: {
      title: "NebulaChat – Private Chat",
      description: "Chat anonymously and privately with users around the world in real-time.",
      url: "https://nebulachat.onrender.com/chat",
      siteName: "NebulaChat",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NebulaChat Chat",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "NebulaChat – Private Chat",
      description: "Chat anonymously and privately with users around the world in real-time.",
      images: ["/og-image.png"],
      site: "@NebulaChat",
      creator: "@NebulaChat",
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };

  export default function ChatLayout({ children }) {
    return (
        <>
        {children}
        </>
    );
  }