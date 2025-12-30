
import ProductPost from "./ProductPost"

const UserPosts = ({ posts, isOwnProfile = false, onCreatePost }) => {
  return (
    <div className="space-y-8">
      {posts.length > 0 ? (
        posts.map((post) => <ProductPost key={post._id} post={post} isOwnProfile={isOwnProfile} />)
      ) : (
        <div className="text-center py-16">
          <div className="bg-gradient-to-br from-violet-100 to-sky-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl">🧺</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {isOwnProfile ? "No posts yet" : "No posts to show"}
          </h3>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            {isOwnProfile
              ? "Start sharing your amazing products with the farming community!"
              : "This user hasn't shared any products yet."}
          </p>
          {isOwnProfile && (
            <button
              onClick={onCreatePost}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-2xl hover:from-violet-700 hover:to-violet-800 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              ✨ Create Your First Post
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default UserPosts
