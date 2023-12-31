<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Monolog\Handler\RollbarHandler;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('prenom');
            $table->string('role');
            $table->string('date_naissance');
            $table->string('profession');
            $table->string('telephone');
            $table->string('adresse');
            $table->string('organisation');
            $table->string('email')->unique();
           // $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
           // $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
