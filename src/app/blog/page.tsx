import { getPosts } from '@/actions/blog';
import Link from 'next/link';
import { format } from 'date-fns'; // You might need to install date-fns or use native Intl

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                    Our Blog
                </h1>
                <p className="text-xl text-muted-foreground">
                    Insights, updates, and thoughts from the FluxoNex team.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-muted/30 rounded-xl">
                        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
                    </div>
                ) : (
                    posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-muted-foreground line-clamp-3">
                                    {post.content}
                                </p>
                                <div className="mt-4 text-primary font-medium group-hover:underline">
                                    Read more &rarr;
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
