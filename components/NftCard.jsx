import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const NftCard = ({ nft }) => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    alert("Copied to clipboard!");
  };

  const text = "Hello";

  return (
    <div className="w-[300px] border rounded-md">
      <div className="">
        <img
          src={nft?.media[0].gateway}
          alt=""
          className="w-full h-[220px] object-cover rounded-lg"
        />
        <div className="p-3 ">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium text-lg">{nft?.title}</h3>

            <span className="text-gray-400 font-medium text-sm">
              {nft?.id?.tokenId.slice(-4)}
            </span>
          </div>

         
         <div className="flex items-center space-x-2">

          <CopyToClipboard >
            <p className="font-semibold text-sm text-blue-400">
              {nft?.contract.address.slice(0, 5)}...
              {nft?.contract.address.slice(-4)}
            </p>
          </CopyToClipboard>

          <CopyToClipboard text={nft?.contract.address} onCopy={handleCopy}>
            <button><img src="copy.png" className="h-6 w-6 hover:bg-gray-100 p-1" alt="" /></button>
          </CopyToClipboard>
         </div>

        </div>

        <div className=" px-3 ">
          <p className="truncate text-gray-500 text-sm">{nft?.description}</p>
        </div>
        <div className="m-3 px-3 flex items-center justify-center">
          <a
            href={`https://etherscan.io/token/${nft?.contract.address}`}
            target="_blank"
            className="bg-blue-600 rounded-md cursor-pointer text-white px-6 py-2 text-sm "
          >
            View on Etherscan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCard;

// 0x0ef9096a9aee8a2704742addfabb4aaba16c6126

// iv>