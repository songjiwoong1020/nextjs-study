import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  return (
      <>
        {router.query?.id}
      </>
    )
  }
  
  export default Detail;