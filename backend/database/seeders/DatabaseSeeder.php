<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            RoleSeeder::class,
            PermissionSeeder::class,
            RolePermissionSeeder::class,
            CategorySeeder::class,
            BlogSeeder::class,
            CompanySeeder::class,
            RecruitmentPageSeeder::class,
        ]);
    }
}
