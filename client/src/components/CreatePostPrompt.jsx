import React from "react"

const CreatePostPrompt = ({ onCreatePost }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-violet-100 p-6 mb-8">
      <div className="flex items-center space-x-4">
        <img
          src="/placeholder.svg?height=50&width=50"
          alt="Your profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-violet-200"
        />
        <button
          onClick={onCreatePost}
          className="flex-1 text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors text-slate-500"
        >
          What's growing on your farm today? Share with the community...
        </button>
        <button
          onClick={onCreatePost}
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-xl hover:from-violet-700 hover:to-violet-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
        >
          📢 Post
        </button>
      </div>
    </div>
  )
}

export default CreatePostPrompt
