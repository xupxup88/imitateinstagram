import IGUser from "component/IGUser";
import Comment from "./Comment";

type IGPostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} alt="" />
      <Comment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  );
};

export default IGPost;
