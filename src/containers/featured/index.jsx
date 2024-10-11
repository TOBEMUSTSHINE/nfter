import { motion } from "framer-motion";
import avatar1sm from "../../assets/images/avatars/avatar1sm.png";
import nft1 from "../../assets/images/nfts/marketplace1.png";
import nft2 from "../../assets/images/nfts/marketplace2.png";
import nft3 from "../../assets/images/nfts/marketplace3.png";
import nft4 from "../../assets/images/nfts/marketplace4.png";
import nft5 from "../../assets/images/nfts/marketplace5.png";
import nft6 from "../../assets/images/nfts/marketplace6.png";
import nft7 from "../../assets/images/nfts/marketplace7.png";
import nft8 from "../../assets/images/nfts/marketplace8.png";
import nft9 from "../../assets/images/nfts/nft9.png";
import FeaturedNftCard from "./FeaturedNftCard";

const featuredNftData = [
  {
    id: 1,
    images: [nft4, nft2, nft8, nft9],
    title: "Amazing Collection",
    nftOwner: "zaheer",
    ownerImg: avatar1sm,
    totalItems: 54,
  },
  {
    id: 2,
    images: [nft1, nft8, nft2, nft3],
    title: "Amazing Collection",
    nftOwner: "Mojeed",
    ownerImg: avatar1sm,
    totalItems: 54,
  },
  {
    id: 3,
    images: [nft6, nft5, nft7, nft2],
    title: "Amazing Collection",
    nftOwner: "Williams",
    ownerImg: avatar1sm,
    totalItems: 54,
  },
];

export default function Featured() {
  return (
    <section aria-label="featured nft section" className="bg-neutral-200">
      <div className="container tablet:px-10 laptop:px-20 | pt-16 pb-24">
        <div className="space-y-14">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className="text-800 text-neutral-900 font-bold font-['Integral_CF',_sans-serif] leading-tight"
          >
            Our Featured NFTs
          </motion.h2>
          <div className="grid grid-cols-1 min-[530px]:grid-cols-2 laptop:grid-cols-3 gap-8">
            {featuredNftData.map((item) => (
              <FeaturedNftCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
