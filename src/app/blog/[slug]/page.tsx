import ReactMarkdown from 'react-markdown';
import { getPostBySlug, addComment } from '@/actions/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    async function submitComment(formData: FormData) {
        'use server';
        await addComment(post!.id, formData);
    }

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>

            <article className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                    {post.title}
                </h1>
                <div className="text-muted-foreground mb-8">
                    Published on {new Date(post.createdAt).toLocaleDateString()}
                </div>

                {/* Markdown Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown
                        components={{
                            img: ({ node, ...props }) => (
                                <span className="block my-8 relative aspect-video rounded-xl overflow-hidden border border-border">
                                    <img {...props} className="object-cover w-full h-full m-0" alt={props.alt || ''} />
                                </span>
                            ),
                            code: ({ node, className, children, ...props }) => {
                                const match = /language-(\w+)/.exec(className || '')
                                const isInline = !match && !String(children).includes('\n');

                                return !isInline && match ? (
                                    <div className="rounded-xl overflow-hidden my-6 border border-border shadow-sm">
                                        <div className="bg-[#1e1e1e] px-4 py-2 text-xs text-gray-400 border-b border-gray-700 flex items-center justify-between">
                                            <span>{match[1].toUpperCase()}</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                            </div>
                                        </div>
                                        <SyntaxHighlighter
                                            {...props}
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{ margin: 0, borderRadius: 0, padding: '1.5rem', fontSize: '0.9rem' }}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className={`${className} bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary`} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>

            <div className="border-t border-border pt-12">
                <h3 className="text-2xl font-bold mb-8">Comments ({post.comments.length})</h3>

                {/* Comment Form */}
                <form action={submitComment} className="bg-muted/30 p-6 rounded-xl mb-12">
                    <h4 className="text-lg font-semibold mb-4">Leave a thought</h4>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium mb-1">Comment</label>
                            <textarea
                                name="content"
                                id="content"
                                rows={3}
                                placeholder="Share your thoughts..."
                                required
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            Post Comment
                        </button>
                    </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                    {post.comments.map((comment: any) => (
                        <div key={comment.id} className="bg-card border border-border p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <User className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="font-semibold">{comment.author}</div>
                                    <div className="text-xs text-muted-foreground">
                                        {new Date(comment.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <p className="text-foreground/80">{comment.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
