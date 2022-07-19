<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Theatre extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $fillable = [
        'name',
        'date',
        'image',
    ];
}
