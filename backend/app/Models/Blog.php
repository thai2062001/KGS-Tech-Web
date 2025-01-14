<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'main_keyword',
        'secondary_keywords',
        'tags',
        'category_id',
        'user_id',
    ];

    /**
     * Quan hệ với Category.
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Quan hệ với User.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
